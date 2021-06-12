import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const BudgetCard = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-left: 2%;
  padding-top: 40px;
`;

export default BudgetCard;
