import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #172C41;
  position: relative;
  overflow: hidden;
`

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -50}vw);
  position: relative;
`

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  align-items: center;
  /* border: 1px solid red; */
  `

export const TitleContainer = styled.p`
  margin-top: 100px;
  flex: 2;
  display: flex;
  align-items: center;
  color: white;
  font-size: 24px;
  /* border: 1px solid black; */
`
export const TextContainer = styled.p`
  flex: 3;
  display: flex;
  color: white;
  margin: 0 20% 0 20%;
  font-size: 24px;
  text-align: center;
  /* border: 1px solid black; */
`
export const DotContainer = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

`
export const HighlightedCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  background: white;
`

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  background: gray;
`