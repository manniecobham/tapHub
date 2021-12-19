import styled from "styled-components";

const ToggleGroup = styled.div`
  &.toggle-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #ececec;
    border-radius: 5px;
    width: 60px;
    height: 24px;

    .toggle-group__button {
      width: 100%;
      margin: 2px;
      padding: 2px;
      cursor: pointer;
      border: none;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: inherit;

      &.active {
        background-color: white;
      }

      &.inactive {
        background-color: inherit;
      }

      & .filterBlack {
        filter: invert(0%) sepia(4%) saturate(17%) hue-rotate(250deg)
          brightness(101%) contrast(101%);
      }

      & .filterGray {
        filter: invert(54%) sepia(0%) saturate(1%) hue-rotate(347deg)
          brightness(93%) contrast(88%);
      }
    }
  }
`;

export { ToggleGroup };

// const ToggleButton = styled.button`
//   width: 100%;
//   margin: 2px;
//   padding: 2px;
//   cursor: pointer;
//   border: none;
//   border-radius: 7px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &.active {
//     background-color: white;
//   }

//   &.inactive {
//     background-color: inherit;
//   }

//   & .filterBlack {
//     filter: invert(0%) sepia(4%) saturate(17%) hue-rotate(250deg)
//       brightness(101%) contrast(101%);
//   }

//   & .filterGray {
//     filter: invert(54%) sepia(0%) saturate(1%) hue-rotate(347deg)
//       brightness(93%) contrast(88%);
//   }
// `;
