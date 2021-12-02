import React, { useRef, useState, useEffect } from "react";
import {
  Arrow,
  Circle,
  Container,
  DotContainer,
  Slide,
  TextContainer,
  TitleContainer,
  Wrapper,
} from "../../styles/Slider/Slider.styled";
import { sliderItems } from "./data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const timeoutRef = useRef(null);

  const SliderItems = sliderItems.map((item) => (
    <Slide>
      <TitleContainer>{item.title}</TitleContainer>
      <TextContainer>{item.text}</TextContainer>
    </Slide>
  ));

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0),
      2000
    );
    console.log(slideIndex);

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  // const handleClick = (direction) => {
  //   if (direction === "left") {
  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
  //     console.log(slideIndex);
  //   } else {
  //     setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
  //     console.log(slideIndex);
  //   }
  // };

  return (
    <Container>
      {/* <Arrow direction="left" onClick={() => handleClick("left")}></Arrow> */}
      <Wrapper slideIndex={slideIndex}>{SliderItems}</Wrapper>
      <DotContainer>
        {/* <Circle></Circle> */}
        {sliderItems.map((_, index) => (
          <Circle
            key={index}
            className={slideIndex === index ? "active" : ""}
          ></Circle>
        ))}
      </DotContainer>
      {/* <Arrow direction="right" onClick={() => handleClick("right")}></Arrow> */}
    </Container>
  );
};

export default Slider;
