import React from 'react'
import { Container, Footer, ImageContainer, Logo, TextContainer, Text, Title, LoginContainer } from '../../styles/LoginComponent/LoginComponent.styled'
import IH_icon from "../../images/Sidebar/instahubIcon.png";

const Login = () => {
  return (
    <Container>
      <ImageContainer>
        <Logo src={IH_icon} />
      </ImageContainer>

      <TextContainer>
        <Title>Instahub</Title>
        <Text>Automation Simplified.</Text>
      </TextContainer>

      <LoginContainer>
        @@@@@@@@@
      </LoginContainer>
      <Footer>Make your building intelligent. Avoid static loops!</Footer>
    </Container>
  )
}

export default Login
