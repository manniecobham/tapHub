import styled from "styled-components";

export const Container = styled.div`
  &.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* margin-left: 50px; */
    /* border: 5px solid red; */

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .time-display {
    display: flex;
    flex-direction: column;

    &__text {
      font-size: 19px;
      font-weight: bold;
      letter-spacing: 0.4px;
      line-height: 22px;
    }
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  .buttons {
    &__outer-container {
      display: flex;
      justify-content: space-around;
    }

    &__inner-container {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: lightgray;
      margin-right: 30px;
      max-width: 200px;
      /* border: 2px solid blue; */
      @media (max-width: 768px) {
        margin-right: 10px;
      }
    }

    &__icon {
      width: 20px;
    }

    /* &__button {
      border: none;
      font-weight: 600;
      font-size: 12px;
      color: ${(props) => props.color};
      background: ${(props) => props.background};
      padding: 2px 10px;
      margin: 2px 3px;
      border-radius: 10px;
      cursor: pointer;

      &.icon {
        text-align: center;
        padding: 2px 10px 0px;

        & img {
          width: 80%;
        }
      }
    } */
  }
`;

// export const GraphNav = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 12px;
//   background: lightgray;
//   margin-right: 30px;
//   max-width: 200px;
// `;

export const Button = styled.button`
  border: none;
  font-weight: 600;
  font-size: 12px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  padding: 2px 10px;
  margin: 2px 3px;
  border-radius: 10px;
  cursor: pointer;

  &.icon {
    text-align: center;
    padding: 2px 10px 0px;

    & img {
      width: 80%;
    }
  }
`;

// export const IconImageContainer = styled.div`
//   width: 20px;
// `;

// export const Icon = styled.img`
//   /* width: 20px; */
// `;

// export const TimeDisplayContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const TimeDisplay = styled.span`
//   font-size: 19px;
//   font-weight: bold;
//   letter-spacing: 0.4px;
//   line-height: 22px;
// `;
