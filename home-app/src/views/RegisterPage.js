import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { routes } from 'routes';
import AuthTemplate from 'templates/AuthTemplate';
import { Formik, Form } from 'formik';
import Message from 'components/atoms/Message/Message';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
  font-family: Montserrat;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: white;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const RegisterPage = () => (
  <AuthTemplate>
    <Formik>
      {({ handleChange, handleBlur }) => (
        <>
          <Heading>Zarejestruj się!</Heading>
          {/* {error && <Message>{error}</Message>} */}
          <StyledForm>
            <StyledInput
              type="email"
              placeholder="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              // ref={emailRef}
              required
            />
            <StyledInput
              type="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              // ref={passwordRef}
              required
            />
            <StyledInput
              type="password"
              placeholder="re-type password"
              onChange={handleChange}
              onBlur={handleBlur}
              // ref={passwordConfirmRef}
              required
            />
            <Button type="submit">Zarejestruj się!</Button>
          </StyledForm>
          <StyledLink to={routes.login}>Masz już konto?</StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

export default RegisterPage;
