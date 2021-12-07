import React from "react";
import { LoginContainer } from "../../styles/Login/Login.styled";
import IH_icon from "../../images/Sidebar/instahubIcon.png";

const LoginForm = () => {
  return (
    <LoginContainer className="login-form">
      <div className="login-form__image">
        <img src={IH_icon} />
      </div>

      <div className="login-form__tagline">
        <p>
          <span className="lead">Instahub</span>
          <br />
          Automation Simplified.
        </p>
      </div>

      <div className="login-form__form">Form</div>
      <div className="login-form__footer">
        Make your building intelligent. Avoid static loops!
      </div>
    </LoginContainer>
  );
};

export default LoginForm;
