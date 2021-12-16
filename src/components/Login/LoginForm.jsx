import React from "react";
import { useContext } from "react";
import useInput from "../../hooks/use-input";
import { LoginContainer } from "../../styles/Login/Login.styled";
import IH_icon from "../../images/Sidebar/instahubIcon.png";
import loginicons from "../../images/Login/login.png";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";

const LoginForm = () => {
  const context = useContext(Context);

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

  // let formIsValid = false;
  // if (enteredUsernameIsValid && enteredPasswordIsValid) {
  //   formIsValid = true;
  // }

  // const signIn = async (userCredentials) => {
  //   const response = fetch(
  //     "https://ibnx4gkcn3.execute-api.us-east-1.amazonaws.com/auth/login",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(userCredentials),
  //     }
  //   );
  // };

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
    <LoginContainer className="login">
      <div className="login__image">
        <img src={IH_icon} alt="logo" />
      </div>

      <div className="login__tagline">
        <p>
          <span className="lead">Instahub</span>
          <br />
          Automation Simplified.
        </p>
        <img src={loginicons} alt="temp" />
      </div>

      <button className="login__email">or sign in with email</button>

      <form className="login__form" onSubmit={onSubmitHandler}>
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
        <div className="form__actions">
          {/* disabled button version if form is invalid*/}
          {/* <button disabled={!formIsValid}>Submit</button> */}
          <div>
            <button className="forgot">Forgot Password?</button>
            <NavLink to="/register" className="signup">
              Sign Up
            </NavLink>
          </div>
          <button className="signin">Sign In</button>
        </div>
      </form>

      <div className="login__footer">
        Make your building intelligent. Avoid static loops!
      </div>
    </LoginContainer>
  );
};

export default LoginForm;
