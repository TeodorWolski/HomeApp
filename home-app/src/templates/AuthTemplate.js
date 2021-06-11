import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import GlassCard from 'components/molecules/GlassCard/GlassCard';

const StyledBody = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
  width: 100%;
  height: 100vh;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(#2391ff, #25c998);
    clip-path: circle(30% at left 0%);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(#2391ff, #25c998);
    clip-path: circle(30% at right 70%);
  }
`;

const StyledHeading = styled(Heading)`
  z-index: 9999;
`;

const AuthTemplate = ({ children }) => (
  <StyledBody>
    <StyledHeading big>Zarządzaj swoją rodziną kilkoma kliknięciami!</StyledHeading>
    <GlassCard>{children}</GlassCard>
  </StyledBody>
);

AuthTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthTemplate;
