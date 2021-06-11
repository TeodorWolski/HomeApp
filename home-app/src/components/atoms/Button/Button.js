import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background-color: #25c998;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  ${({ secondary }) =>
    secondary &&
    css`
      background: hsl(0, 0%, 96%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
