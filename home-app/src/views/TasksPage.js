import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import TaskCard from 'components/molecules/TaskCard/TaskCard';
import Heading from 'components/atoms/Heading/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import { api, endpoints } from 'api';

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  margin-top: 5%;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledHeading = styled(Heading)`
  margin-top: 0;
  padding-top: 40px;
  display: block;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  background-color: ${({ theme }) => theme.lightGreen};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
  transition: all 1s;
  transform: ${({ isVisible }) => (isVisible ? 'rotate(45deg)' : 'none')};
  bottom: 40px;
  right: 40px;
`;

const TasksPage = () => {
  const [tasks, changeTasks] = useState(['']);
  const [isVisible, changeVisibility] = useState(false);

  const isNewItemBarVisible = () => changeVisibility(!isVisible);
  useEffect(() => {
    api
      .get(endpoints.tasks)
      .then(({ data }) => {
        console.log(data);
        changeTasks(data.tasks);
        console.log(tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <UserTemplate>
      <StyledHeading big>Twoje dzisiejsze zadania</StyledHeading>
      <StyledGrid>
        {tasks.map(({ name, description, id }) => (
          <TaskCard name={name} description={description} key={id} />
        ))}
      </StyledGrid>
      <StyledButtonIcon icon={plusIcon} onClick={isNewItemBarVisible} isVisible={isVisible} />
      <NewItemBar handleClose={isNewItemBarVisible} isVisible={isVisible} />
    </UserTemplate>
  );
};

export default TasksPage;
