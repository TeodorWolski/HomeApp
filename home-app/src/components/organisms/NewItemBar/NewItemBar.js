import React, { useRef } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
// import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { api, endpoints } from 'api';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme }) => theme.lightGreen};
  height: 100vh;
  width: 680px;
  z-index: 9999;
  padding: 100px 50px;
  position: fixed;
  background-color: white;
  -webkit-box-shadow: -5px 0px 15px 0px rgba(0, 0, 0, 0.1);
  box-shadow: -5px 0px 15px 0px rgba(0, 0, 0, 0.1);
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  @media (max-width: 801px) {
    width: 630px;
  }
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 10px;
  border-radius: 20px;
  height: 30%;
  font-family: Montserrat;
  resize: none;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
  font-family: Montserrat;
`;

const StyledButton = styled(Button)`
  position: relative;
  top: 30px;
  height: 68px;
  margin-bottom: 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  color: black;
`;

const NewItemBar = ({ isVisible, handleClose }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ name, data, description }) => {
    api
      .post(endpoints.createTask, {
        name,
        data,
        description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledWrapper handleClose={handleClose} isVisible={isVisible}>
      <StyledHeading big>Dodaj zadanie do wykonania</StyledHeading>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          placeholder="nazwa zadania"
          type="text"
          name="name"
          defaultValue=""
          {...register('name')}
        />
        <StyledInput
          placeholder="data wykonania"
          type="text"
          name="data"
          defaultValue=""
          {...register('data')}
        />
        <StyledTextArea
          type="text"
          placeholder="opis"
          name="description"
          as="textarea"
          defaultValue=""
          {...register('description')}
        />
        <StyledButton type="submit">Zapisz</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default NewItemBar;
