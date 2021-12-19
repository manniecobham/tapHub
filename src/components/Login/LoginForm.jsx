import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import { LoginContainer } from "../../styles/Login/Login.styled";
import IH_icon from "../../images/Sidebar/instahubIcon.png";
import loginicons from "../../images/Login/login.png";
import { Navigate, NavLink } from "react-router-dom";

const LoginForm = (props) => {
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setHasError] = useState();

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

  const signIn = async (userCredentials) => {
    setHasError(false);
    setIsSubmitting(true);
    props.onLoginLoad(true);

    const response = await fetch(
      "https://ibnx4gkcn3.execute-api.us-east-1.amazonaws.com/auth/login",
      {
        method: "POST",
        headers: {},
        body: JSON.stringify(userCredentials),
      }
    );

    if (!response.ok) {
      throw new Error("Error with login");
    }

    const responseData = await response.json();
    console.log(responseData);

    if (responseData.body.code === "NotAuthorizedException") {
      throw new Error(responseData.body.message);
    }

    props.onLogin({
      username: responseData.body.username,
      authToken: responseData.body.signInUserSession.accessToken.jwtToken,
    });
    props.onLoginLoad(false);
    setIsSubmitting(false);
    setLoginSuccessful(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredUsernameIsValid || !enteredPasswordIsValid) {
      return;
    }

    signIn({ username: enteredUsername, password: enteredPassword }).catch(
      (error) => {
        console.log(error.message);
        props.onLoginLoad(false);
        setIsSubmitting(false);
        setHasError(true);
        setErrorMessage(error.message);
      }
    );

    resetUsernameInput();
    resetPasswordInput();
  };

  if (!hasError && isSubmitting) {
    return (
      <div className="lds-circle">
        <div></div>
      </div>
    );
  }

  if (!hasError && !isSubmitting && loginSuccessful) {
    return <Navigate to="/overview" />;
  }

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
          <div>
            <button className="forgot">Forgot Password?</button>
            <NavLink to="/register" className="signup">
              Sign Up
            </NavLink>
          </div>
          {hasError && <p>{errorMessage}</p>}
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
