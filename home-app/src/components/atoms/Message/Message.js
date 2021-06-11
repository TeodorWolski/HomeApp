import styled, { css } from 'styled-components';

const Message = styled.div`
  width: 250px;
  height: 35px;
  border-radius: 25px;
  background-color: hsl(0, 100%, 81%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  top: 80%;
  ${({ success }) =>
    success &&
    css`
      text-align: center;
      height: 40px;
      background-color: hsl(95, 100%, 75%);
      color: hsl(95, 100%, 37%);
    `}
`;

export default Message;
