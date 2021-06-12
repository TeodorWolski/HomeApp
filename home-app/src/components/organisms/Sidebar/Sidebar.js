import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoutIcon from 'assets/icons/logout.svg';
import moneyIcon from 'assets/icons/money.svg';
import settingsIcon from 'assets/icons/settings.svg';
import shoppingIcon from 'assets/icons/shopping-list.svg';
import tasksIcon from 'assets/icons/tasks.svg';
import { routes } from 'routes';

const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  left: 0;
  padding: 25px 0;
  position: fixed;
  height: 100vh;
  z-index: 1;
  width: 150px;
  background-color: ${({ theme }) => theme.lightGreen};
`;

const StyledLinkList = styled.ul`
  position: relative;
  bottom: 3%;
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled(ButtonIcon)`
  width: 100%;
  margin-top: 7vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: 60px;
`;

const Sidebar = () => {
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      history.push(routes.login);
    } catch {
      setError('Failed to log out');
    }
  };
  return (
    <StyledWrapper>
      <StyledLinkList>
        <StyledListItem>
          <ButtonIcon exact as={NavLink} to="/tasks" icon={tasksIcon} activeclass="active" />
        </StyledListItem>
        <StyledListItem>
          <ButtonIcon exact as={NavLink} to="/budget" icon={moneyIcon} activeclass="active" />
        </StyledListItem>
        <StyledListItem>
          <ButtonIcon
            exact
            as={NavLink}
            to="/shopping-list"
            icon={shoppingIcon}
            activeclass="active"
          />
        </StyledListItem>
        <StyledListItem>
          <ButtonIcon exact as={NavLink} to="/settings" icon={settingsIcon} activeclass="active" />
        </StyledListItem>
        <StyledListItem>
          <StyledLogoutButton
            exact
            as={NavLink}
            onClick={handleLogout}
            to="/login"
            icon={logoutIcon}
          />
        </StyledListItem>
      </StyledLinkList>
    </StyledWrapper>
  );
};

export default Sidebar;
