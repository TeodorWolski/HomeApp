import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-left: 150px;
`;

const UserTemplate = ({ children }) => (
  <StyledWrapper>
    <Sidebar />
    {children}
  </StyledWrapper>
);

UserTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default UserTemplate;
