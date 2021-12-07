import styled from "styled-components";

export const Container = styled.div`
  &.graph-button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* margin-left: 50px; */
  }
  .graph-button-container {
    &__nav {
      display: flex;
      justify-content: space-around;
    }

    &__nav > div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: lightgray;
      margin-right: 30px;
      max-width: 200px;
    }

    &__button {
      border: none;
      font-weight: 600;
      font-size: 12px;
      color: ${(props) => props.color};
      background: ${(props) => props.background};
      padding: 2px 10px;
      margin: 2px 3px;
      border-radius: 10px;
      cursor: pointer;

      &-icon {
        text-align: center;
        padding: 2px 10px 0px;
      }
    }

    &__button-icon {
      width: 20px;
    }
  }

  .time-display {
    display: flex;
    flex-direction: column;

    &__timeframe {
      font-size: 19px;
      font-weight: bold;
      letter-spacing: 0.4px;
      line-height: 22px;
    }
  }
`;

// export const Button = styled.button`
//   border: none;
//   font-weight: 600;
//   font-size: 12px;
//   color: ${(props) => props.color};
//   background: ${(props) => props.background};
//   padding: 2px 10px;
//   margin: 2px 3px;
//   border-radius: 10px;
//   cursor: pointer;

//   &.icon {
//     text-align: center;
//     padding: 2px 10px 0px;

//     & img {
//       width: 80%;
//     }
//   }
//`;
