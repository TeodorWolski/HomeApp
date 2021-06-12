import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import doneIcon from 'assets/icons/done.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  height: 200px;
  width: 400px;
  border-radius: 25px;
  background-color: white;
  overflow: hidden;
  display: grid;
  position: relative;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 1px 30px;
  background: #25c998;
  z-index: 9999;

  ${({ flex }) =>
    flex &&
    css`
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledParagraph = styled(Paragraph)`
  color: black;
`;

const StyledButton = styled(Button)`
  position: relative;
  left: 69%;
  bottom: 15%;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: white;
  height: 45px;
  width: 45px;
  display: block;
  background-position: 50%;
  background-size: 60%;
  position: absolute;
  transform: translateY(-50%);
  right: 30px;
  top: 16%;
  border-radius: 50px;
`;

const TaskCard = ({ name, id, description, data }) => (
  <StyledWrapper key={id}>
    <InnerWrapper>
      <Heading>{name}</Heading>
      <StyledButtonIcon icon={doneIcon} />
    </InnerWrapper>
    <InnerWrapper flex>
      <StyledParagraph>{description}</StyledParagraph>
    </InnerWrapper>
  </StyledWrapper>
);

TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default TaskCard;
