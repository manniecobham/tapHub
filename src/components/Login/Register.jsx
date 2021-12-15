import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useInput from "../../hooks/use-input";
import {
  RegisterFooter,
  RegisterForm,
  RegisterHeader,
} from "../../styles/Login/Register.styled";
import instaHubLogo from "../../images/Login/instahub_logo.png";

const Register = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid
    ) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control form-control--invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control form-control--invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control form-control--invalid"
    : "form-control";
  const passwordInputClasses = passwordInputHasError
    ? "form-control form-control--invalid"
    : "form-control";

  return (
    <>
      <RegisterHeader src={instaHubLogo} alt="logo" />
      <RegisterForm onSubmit={onSubmitHandler}>
        <h2 className="form__title">Register</h2>
        <div className="form__inputs">
          <div className={firstNameInputClasses}>
            <label htmlFor="first">First Name</label>
            <input
              required
              value={enteredFirstName}
              id="first"
              type="text"
              onChange={firstNameChangeHandler}
              // onBlur fires whenever this input loses focus
              onBlur={firstNameBlurHandler}
            />
            {firstNameInputHasError && (
              <p className="error-text">First name must not be empty</p>
            )}
          </div>
          <div className={lastNameInputClasses}>
            <label htmlFor="last">Last Name</label>
            <input
              required
              value={enteredLastName}
              id="last"
              type="text"
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameInputHasError && (
              <p className="error-text">Last name must not be empty</p>
            )}
          </div>
          <div className={emailInputClasses}>
            <label htmlFor="email">Email</label>
            <input
              required
              value={enteredEmail}
              id="email"
              type="text"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
              <p className="error-text">Email must not be empty</p>
            )}
          </div>
          <div className={passwordInputClasses}>
            <label htmlFor="password">Password</label>
            <input
              required
              value={enteredPassword}
              id="password"
              type="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordInputHasError && (
              <p className="error-text">Enter a valid password</p>
            )}
          </div>
        </div>
        <div className="form__actions">
          {/* disabled button version if form is invalid*/}
          {/* <button disabled={!formIsValid}>Submit</button> */}
          <button>Register</button>
        </div>
      </RegisterForm>
      <RegisterFooter>
        <p>Already have an account?</p>
        <NavLink to="/login" className="login">
          Login
        </NavLink>
      </RegisterFooter>
    </>
  );
};

export default Register;
