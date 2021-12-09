import styled from "styled-components";

const GraphCard = styled.div`
  &.graph-grid {
    background-color: ${(props) => props.backgroundColor};
    border-radius: 8px;
    display: grid;
    position: relative;
    padding: 0;
    flex-direction: row;
    font-size: 16px;
    grid-template-areas: "sidebar graph";
    grid-template-columns: 2fr 5fr;

    .graph-grid {
      &__sidebar {
        grid-area: sidebar;
      }
      &__container {
        &-outer {
          grid-area: graph;
          width: 100%;
          /* border: solid 5px red; */
        }
        &-inner {
          margin-top: 20px;
          margin-bottom: 20px;
          padding: 0;
          overflow: none;
          padding-left: 10px;
          /* border: solid 5px blue; */

          @media (max-width: 470px) {
            margin-top: 3rem;
            padding-left: 0px;
          }
        }
      }
    }

    /* hamburger */
    .hamburger {
      z-index: 999;
      display: flex;
      position: absolute;
      flex-direction: column;
      background-color: transparent;
      border: none;
      display: none;
      cursor: pointer;
      transition: all 1s;
      top: 10px;
      left: 10px;

      @media (max-width: 470px) {
        top: 10px;
        left: 44%;
      }
    }

    @media (max-width: 1024px) {
      grid-template-areas:
        "sidebar"
        "graph";
      grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
      &.graph-grid {
        grid-template-areas:
          "sidebar"
          "graph";

        .hamburger {
          display: flex;
        }

        .hamburger--open {
          top: 10px;
          left: 10px;
          /* transition: transform 2s ease-in-out;
          &::hover {
            transform: scale(1.3);
          } */
        }
      }
    }
  }
`;

export { GraphCard };
