import React from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import UpdatePasswordCard from 'components/molecules/UpdatePasswordCard/UpdatePasswordCard';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const SettingsPage = () => (
  <UserTemplate>
    <StyledWrapper>
      <UpdatePasswordCard />
    </StyledWrapper>
  </UserTemplate>
);

export default SettingsPage;
