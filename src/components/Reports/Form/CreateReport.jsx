import React from "react";
import { ReportForm } from "../../../styles/Reports/Form/ReportForm";
import useInput from "../../../hooks/use-input";

const CreateReport = (props) => {
  const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredUsernameIsValid || !enteredPasswordIsValid) {
      return;
    }

    // signIn();

    resetUsernameInput();
    resetPasswordInput();
  };

  const usernameInputClasses = usernameInputHasError
    ? "form-control form-control--invalid"
    : "form-control";
  const passwordInputClasses = passwordInputHasError
    ? "form-control form-control--invalid"
    : "form-control";

  return (
    <ReportForm onSubmit={onSubmitHandler}>
      <p>hihiih</p>
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
          <p className="error-text">Password must not be empty</p>
        )}
      </div>
    </ReportForm>
  );
};

export default CreateReport;
