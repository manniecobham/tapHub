import React from "react";
import useInput from "../../hooks/use-input";
import {
  RegisterForm,
  RegisterHeader,
} from "../../styles/Login/Register.styled";
import instaHubLogo from "../../images/Login/instahub_logo.png";

const ConfirmSignup = () => {
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

  // let formIsValid = false;
  // if (enteredUsernameIsValid && enteredCodeIsValid) {
  //   formIsValid = true;
  // }

  const onConfirm = async (userCredentials) => {
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
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredUsernameIsValid || !enteredCodeIsValid) {
      return;
    }

    onConfirm({ username: enteredUsername, code: enteredCode }).catch(() => {});

    // resetUsernameInput();
    // resetCodeInput();
  };

  const usernameInputClasses = usernameInputHasError
    ? "form-control form-control--invalid"
    : "form-control";
  const codeInputClasses = codeInputHasError
    ? "form-control form-control--invalid"
    : "form-control";

  return (
    <>
      <RegisterHeader src={instaHubLogo} alt="logo" />
      <RegisterForm onSubmit={onSubmitHandler}>
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
        <div className="form__actions">
          {/* disabled button version if form is invalid*/}
          {/* <button disabled={!formIsValid}>Submit</button> */}
          <button className="signin">Confirm</button>
        </div>
      </RegisterForm>
    </>
  );
};

export default ConfirmSignup;
