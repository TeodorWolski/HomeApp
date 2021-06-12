import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Formik, Form } from 'formik';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { useAuth } from 'context/AuthContext';
import Message from 'components/atoms/Message/Message';

const StyledWrapper = styled.div`
  width: 600px;
  height: 600px;
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
  position: relative;
`;
export const InnerWrapper = styled.div`
  padding: 35px 30px;
  position: relative;
  background-color: ${({ theme }) => theme.settings};
  text-align: center;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
  display: block;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButton = styled(Button)`
  position: relative;
  background-color: ${({ theme }) => theme.lightGreen};
  top: 20%;
`;

export const StyledInput = styled(Input)`
  width: 350px;
  margin: 25px 0 10px 0;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const UpdatePasswordCard = () => {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line consistent-return
  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    setError('');
    if (
      passwordRef.current.value === passwordConfirmRef.current.value &&
      passwordRef.current.value !== currentUser.password
    ) {
      updatePassword(passwordRef.current.value);
      setMessage('Password updated successfully');
    } else {
      setError('Failed to update password');
    }

    setLoading(false);
  };

  return (
    <StyledWrapper>
      <Formik>
        {({ handleChange, handleBlur }) => (
          <>
            <InnerWrapper>
              <StyledHeading big>Zmień hasło</StyledHeading>
            </InnerWrapper>
            <InnerWrapper flex>
              <StyledForm onSubmit={handleSubmit}>
                {error && <Message>{error}</Message>}
                {message && <Message success>{message}</Message>}
                <StyledInput
                  type="password"
                  placeholder="hasło"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ref={passwordRef}
                  required
                />
                <StyledInput
                  type="password"
                  placeholder="powtórz hasło"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ref={passwordConfirmRef}
                  required
                />
                <StyledButton disabled={loading} type="submit">
                  potwierdź
                </StyledButton>
              </StyledForm>
            </InnerWrapper>
          </>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default UpdatePasswordCard;
