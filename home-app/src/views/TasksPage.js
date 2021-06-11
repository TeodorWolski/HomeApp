import React from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';

const StyledDiv = styled.div`
  z-index: 99999;
`;

const TasksPage = () => (
  <UserTemplate>
    <StyledDiv>This is tasks page</StyledDiv>
  </UserTemplate>
);

export default TasksPage;
