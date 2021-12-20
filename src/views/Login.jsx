import React, { useState } from "react";
import LoginSlider from "../components/Login/LoginSlider";
import LoginForm from "../components/Login/LoginForm";

const Login = (props) => {
  const [loginIsSubmitting, setLoginIsSubmitting] = useState(false);

  const onLoginIsSubmittingHandler = (loggingState) => {
    setLoginIsSubmitting(loggingState);
  };

  return (
    <div id="login" style={{ display: "flex" }}>
      <LoginForm
        id="left"
        onLogin={props.onLogin}
        onLoginLoad={onLoginIsSubmittingHandler}
      />
      {!loginIsSubmitting && <LoginSlider id="right" />}
    </div>
  );
};

export default Login;
