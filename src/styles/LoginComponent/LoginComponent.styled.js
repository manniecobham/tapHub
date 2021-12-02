import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-flow: column;
  /* border: 1px solid red; */
`
export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  /* border: 1px solid red; */
`

export const Logo = styled.img`
  margin-top: 100px;
  width: 30px;
  height: 30px;
  /* border: 1px solid red; */
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  /* border: 1px solid red; */
`

export const Title = styled.p`
  display: flex;
  font-size: 64px;
  line-height: 75px;
`

export const Text = styled.p`
  display: flex;
  font-size: 18px;
`

export const LoginContainer = styled.div`
  display: flex;
  flex: 2;
`

export const Footer = styled.div`
  line-height: 40px;
  position: absolute;
  bottom: 0;
  /* font-family: Roboto; */
`