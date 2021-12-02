import React from "react";
import Slider from "../components/Slider/Slider";
import LoginComponent from "../components/LoginComponent/LoginComponent";
import { Container } from "../styles/Login/Login.styled";

const Login = () => {
  return (
    <Container id="login">
      <LoginComponent id="left" />
      <Slider id="right" />
    </Container>
  );
};

export default Login;
