import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import {
  RegisterForm,
  RegisterHeader,
} from "../../styles/Login/Register.styled";
import instaHubLogo from "../../images/Login/instahub_logo.png";
import { Navigate } from "react-router-dom";

// Question to ask backend for future:
// Is there an expiration code for login code? If so, how would user be able to
// request a new one? Can we just make it infinite for now?

const ConfirmSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmSuccessful, setConfirmSuccessful] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCode,
    isValid: enteredCodeIsValid,
    hasError: codeInputHasError,
    valueChangeHandler: codeChangeHandler,
    inputBlurHandler: codeBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const onConfirm = async (userCredentials) => {
    setHasError(false);
    setIsSubmitting(true);

    const response = await fetch(
      "https://ibnx4gkcn3.execute-api.us-east-1.amazonaws.com/auth/confirmsignup",
      {
        method: "POST",
        headers: {},
        body: JSON.stringify(userCredentials),
      }
    );

    const responseData = await response.json();
    console.log(responseData);

    if (responseData.body.code === "CodeMismatchException") {
      setHasError(true);
      throw new Error(responseData.body.message);
    }

    if (responseData.body !== "SUCCESS") {
      setHasError(true);
      throw new Error("Something went wrong!");
    }

    setIsSubmitting(false);
    setConfirmSuccessful(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredUsernameIsValid || !enteredCodeIsValid) {
      return;
    }

    onConfirm({ username: enteredUsername, code: enteredCode }).catch(
      (error) => {
        console.log(error.message);
        setErrorMessage(error.message);
        setIsSubmitting(false);
        setConfirmSuccessful(false);
      }
    );
  };

  if (isSubmitting && !hasError) {
    return (
      <div className="lds-circle">
        <div></div>
      </div>
    );
  }

  if (!isSubmitting && !hasError && confirmSuccessful) {
    return <Navigate to="/login" replace={true} />;
  }

  const usernameInputClasses = usernameInputHasError
    ? "form-control form-control--invalid"
    : "form-control";
  const codeInputClasses = codeInputHasError
    ? "form-control form-control--invalid"
    : "form-control";

  return (
    <>
      <RegisterHeader src={instaHubLogo} alt="logo" />
      <RegisterForm
        onSubmit={onSubmitHandler}
        style={hasError ? { borderColor: "#cd564c" } : {}}
      >
        <h2 className="form__title">Complete your sign up</h2>
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
          </div>
          <div className={codeInputClasses}>
            <label htmlFor="code">Verification Code</label>
            <input
              required
              value={enteredCode}
              id="code"
              type="text"
              onChange={codeChangeHandler}
              onBlur={codeBlurHandler}
            />
            {codeInputHasError && (
              <p className="error-text">Code must not be empty</p>
            )}
          </div>
        </div>
        {hasError && (
          <p
            className="error-text"
            style={{ color: "red", textAlign: "center" }}
          >
            {errorMessage}
          </p>
        )}
        <div className="form__actions">
          <button className="signin">Confirm</button>
        </div>
      </RegisterForm>
    </>
  );
};

export default ConfirmSignup;
