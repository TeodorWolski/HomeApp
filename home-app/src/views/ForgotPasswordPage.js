import React from 'react';
import AuthTemplate from 'templates/AuthTemplate';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Message from 'components/atoms/Message/Message';
import GlassCard from 'components/molecules/GlassCard/GlassCard';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 5px 0 30px 0;
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
  margin: 20px 0 0;
`;

const ForgotPasswordPage = () => (
  <AuthTemplate>
    <Formik>
      {({ handleChange, handleBlur }) => (
        <>
          <Heading>Zresetuj swoje hasło</Heading>
          {/* {message && <Message success>{message}</Message>}
          {error && <Message>{error}</Message>} */}
          <StyledForm>
            <StyledInput
              type="email"
              placeholder="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              // ref={emailRef}
            />
            <Button type="submit">Zresetuj hasło</Button>
          </StyledForm>
          <StyledLink to={routes.login}>Masz już konto?</StyledLink>
          <StyledLink to={routes.register}>Potrzebujesz konta?</StyledLink>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

export default ForgotPasswordPage;
