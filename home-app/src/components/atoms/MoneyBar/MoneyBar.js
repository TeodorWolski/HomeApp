import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 400px;
  height: 50px;
  background-color: ${({ theme }) => theme.lightGreen};
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 19px;
  margin-top: 20px;
`;

const StyledParagraph = styled(Paragraph)`
  position: relative;
  left: 50%;
`;

const MoneyBar = ({ id, name, amount }) => (
  <StyledWrapper key={id}>
    <Heading>{amount}</Heading>
    <StyledParagraph>{name}</StyledParagraph>
  </StyledWrapper>
);

MoneyBar.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default MoneyBar;
