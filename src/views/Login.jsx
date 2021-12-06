import React from "react";
import LoginSlider from "../components/Login/LoginSlider";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <div id="login">
      <LoginForm id="left" />
      <LoginSlider id="right" />
    </div>
  );
};

export default Login;
