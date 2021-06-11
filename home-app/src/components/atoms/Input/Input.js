import styled from 'styled-components';

const Input = styled.input`
  border-radius: 50px;
  border: none;
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.grey100};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  ::placeholder {
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export default Input;
