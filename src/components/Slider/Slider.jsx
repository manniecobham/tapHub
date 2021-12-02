import React, { useState, useEffect } from 'react'
import { Arrow, Circle, Container, DotContainer, HighlightedCircle, Slide, TextContainer, TitleContainer, Wrapper } from '../../styles/Slider/Slider.styled'
import { sliderItems } from './data'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1)
      console.log(slideIndex)

    } else {
      setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex+1 : 0)
      console.log(slideIndex)
    }
  }

  // useEffect(() => {
  //   setInterval(function(){ 
  //     setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex+1 : 0)
  //     console.log(slideIndex)
  // }, 2000);
  // }, [slideIndex])

  // setInterval(function(){ 
  //   setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex+1 : 0)
  //   console.log(slideIndex)
  // }, 2000);

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide>
            <TitleContainer>
              {item.title}
            </TitleContainer>
            <TextContainer>
              {item.text}
            </TextContainer>
          </Slide>
        ))}
      </Wrapper>
      <DotContainer>
        {Array.from({length: sliderItems.length}).map((item, index) => {
          if (slideIndex === index) {
            return (
              <HighlightedCircle></HighlightedCircle>
            )
          } else {
            return (
              <Circle></Circle>
            )
          }
        })}
      </DotContainer>

      <Arrow direction="right" onClick={()=>handleClick("right")}>

      </Arrow>
    </Container>
  )
}


export default Slider
