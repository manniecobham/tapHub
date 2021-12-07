import styled from "styled-components";

export const LoginSliderContainer = styled.div`
  &.slider {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #172c41;
    position: relative;
    overflow: hidden;

    .slider {
      &__wrapper {
        height: 100%;
        display: flex;
        transition: all 1.5s ease;
        transform: translateX(${(props) => props.slideIndex * -50}vw);
        position: relative;

        .slide {
          display: flex;
          flex-direction: column;
          width: 50vw;
          height: 100vh;
          align-items: center;

          &__title {
            margin-top: 100px;
            flex: 2;
            display: flex;
            align-items: center;
            color: white;
            font-size: 24px;
          }

          &__text {
            flex: 3;
            display: flex;
            color: white;
            margin: 0 20% 0 20%;
            font-size: 24px;
            text-align: center;
          }
        }
      }

      &__slide-dots {
        position: absolute;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;

        & > div {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin: 0 5px;
          background: gray;

          &.active {
            background: white;
          }
        }
      }
    }
  }
`;

// export const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: gray;
//   border-radius: 50%;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   z-index: 2;
// `;
