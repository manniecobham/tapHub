import React, { useRef, useState, useEffect } from "react";
import { LoginSliderContainer } from "../../styles/Login/Slider.styled";
import { sliderItems } from "./data";

const LoginSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const timeoutRef = useRef(null);

  const SliderItems = sliderItems.map((item) => (
    <div className="slide">
      <p className="slide__title">{item.title}</p>
      <p className="slide__text">{item.text}</p>
    </div>
  ));

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0),
  //     2000
  //   );
  //   console.log(slideIndex);

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [slideIndex]);

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
    <LoginSliderContainer className="slider" slideIndex={slideIndex}>
      {/* <Arrow direction="left" onClick={() => handleClick("left")}></Arrow> */}
      <div className="slider__wrapper">{SliderItems}</div>
      <div className="slider__slide-dots">
        {sliderItems.map((_, index) => (
          <div
            key={index}
            className={slideIndex === index ? "active" : ""}
          ></div>
        ))}
      </div>
      {/* <Arrow direction="right" onClick={() => handleClick("right")}></Arrow> */}
    </LoginSliderContainer>
  );
};

export default LoginSlider;
