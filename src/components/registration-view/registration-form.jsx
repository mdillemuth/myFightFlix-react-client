import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const RegistrationForm = (props) => {
  const {
    usernameValue,
    emailValue,
    passwordValue,
    passwordConfirmValue,
    birthdayValue,
    isClientValidated,
    onFormChange,
    onRegistration,
  } = props;

  return (
    <React.Fragment>
      <Form
        noValidate
        validated={isClientValidated}
        className='mb-2'
        onSubmit={onRegistration}
      >
        <Form.Group className='mb-2' controlId='registerUsername'>
          <Form.Control
            autoFocus
            type='text'
            placeholder='Username'
            name='username'
            value={usernameValue}
            onChange={onFormChange}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please choose a username
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-2' controlId='registerEmail'>
          <Form.Control
            type='email'
            placeholder='Email'
            name='email'
            value={emailValue}
            onChange={onFormChange}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-2' controlId='registerPassword'>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            value={passwordValue}
            onChange={onFormChange}
            required
            minLength='7'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Password must be at least 7 characters
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-2' controlId='registerConfirmPassword'>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            name='passwordConfirm'
            value={passwordConfirmValue}
            onChange={onFormChange}
            required
            minLength='7'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Password must be at least 7 characters
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='registerBirthday' className='mb-2 '>
          <Form.Label className='mb-1 text-muted font-weight-bold'>
            Please enter your birthday
          </Form.Label>
          <Form.Control
            type='date'
            name='birthday'
            placeholder='Birthday'
            value={birthdayValue}
            onChange={onFormChange}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Birthday is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant='primary' type='submit' className='w-100 btn-lg mb-3'>
          Sign Up
        </Button>
      </Form>
      <small className='text-muted text-center d-block'>
        Already a member?
        <Link to='/'>
          <span style={{ cursor: 'pointer' }} className='text-primary ml-2'>
            Login here
          </span>
        </Link>
      </small>
    </React.Fragment>
  );
};

RegistrationForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  passwordConfirmValue: PropTypes.string.isRequired,
  birthdayValue: PropTypes.string.isRequired,
  isClientValidated: PropTypes.bool.isRequired,
  onFormChange: PropTypes.func.isRequired,
  onRegistration: PropTypes.func.isRequired,
};

export default RegistrationForm;
