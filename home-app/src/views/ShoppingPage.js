import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import { staticData } from 'assets/data/data';
import UserTemplate from 'templates/UserTemplate';
import TaskCard from 'components/molecules/TaskCard/TaskCard';

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

const ShoppingPage = () => (
  <UserTemplate>
    <StyledHeading big>Twoje dzisiejsze zadania</StyledHeading>
    <StyledGrid>
      {staticData.map(({ name, id, description }) => (
        <TaskCard name={name} key={id} description={description} />
      ))}
    </StyledGrid>
  </UserTemplate>
);

export default ShoppingPage;
