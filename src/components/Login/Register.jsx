import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import useInput from "../../hooks/use-input";
import {
  RegisterFooter,
  RegisterForm,
  RegisterHeader,
} from "../../styles/Login/Register.styled";
import TabHubLogo from "../../images/Login/TabHub_logo.png";

const passwordValidation = (value) => {
  let match = /(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/;

  if (!match.test(value)) {
    return false;
  }
  return true;
};

const Register = (props) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(passwordValidation);

  const signUp = async (userCredentials) => {
    setIsSubmitting(true);
    setHasError(false);

    const response = await fetch(
      "https://ibnx4gkcn3.execute-api.us-east-1.amazonaws.com/auth/signup",
      {
        method: "POST",
        headers: {
          // "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      }
    );

    if (!response.ok) {
      throw new Error("ERROR!");
    }

    const responseData = await response.json();
    console.log(responseData);

    if (responseData.body.code === "UsernameExistsException") {
      throw new Error("User already exists");
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      !enteredUsernameIsValid ||
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid
    ) {
      return;
    }

    signUp({
      username: enteredUsername,
      password: enteredPassword,
      attributes: {
        email: enteredEmail,
        given_name: enteredFirstName,
        family_name: enteredLastName,
      },
    }).catch((error) => {
      console.log(error.message);
      setHasError(true);
      setErrorMessage(error.message);
      setIsSubmitting(false);
    });
  };

  // Signing up in process
  if (isSubmitting && !hasError) {
    return (
      <div className="lds-circle">
        <div></div>
      </div>
    );
  }

  // Confirm sign up
  if (!isSubmitting && !hasError && submitted) {
    // navigate("/confirm");
    // return;
    return <Navigate to="/confirm" replace={true} />;
  }

  const usernameInputClasses =
    usernameInputHasError || hasError
      ? "form-control form-control--invalid"
      : "form-control";
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
      <RegisterHeader src={TabHubLogo} alt="logo" />
      <RegisterForm
        onSubmit={onSubmitHandler}
        style={hasError ? { borderColor: "#cd564c" } : {}}
      >
        <h2 className="form__title">Register</h2>
        {hasError && (
          <p style={{ textAlign: "center", color: "#cd564c" }}>
            {errorMessage}
          </p>
        )}
        <div className="form__inputs">
          <div className={usernameInputClasses}>
            <label htmlFor="username">Username</label>
            <input
              required
              value={enteredUsername}
              id="username"
              type="text"
              onChange={usernameChangeHandler}
              // onBlur fires whenever this input loses focus
              onBlur={usernameBlurHandler}
            />
            {usernameInputHasError && (
              <p className="error-text">Username must not be empty</p>
            )}
            {hasError && (
              <p className="error-text">Please enter a different username</p>
            )}
          </div>
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
              <p className="error-text">Email is invalid</p>
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
