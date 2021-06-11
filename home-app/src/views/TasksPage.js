import React from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import TaskCard from 'components/molecules/TaskCard/TaskCard';
import Heading from 'components/atoms/Heading/Heading';

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

const TasksPage = () => (
  <UserTemplate>
    <StyledHeading big>Twoje dzisiejsze zadania</StyledHeading>
    <StyledGrid>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </StyledGrid>
  </UserTemplate>
);

export default TasksPage;
