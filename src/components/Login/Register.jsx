import React, { useState, useEffect } from "react";
import useInput from "../../hooks/use-input";

const Register = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (enteredFirstNameIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredFirstNameIsValid) {
      return;
    }

    resetFirstNameInput();
  };

  const formClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <form className={formClasses} onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="first">First Name</label>
          <input
            value={enteredFirstName}
            id="first"
            type="text"
            onChange={firstNameChangeHandler}
            // onBlur fires whenever this input loses focus
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
      <p>{enteredFirstName}</p>
    </>
  );
};

export default Register;
