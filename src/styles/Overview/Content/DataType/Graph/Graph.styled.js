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
        }
        &-inner {
          margin-top: 20px;
          margin-bottom: 20px;
          padding: 0;
          overflow: none;
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
      transition: all 2s;
      top: 10px;
      left: 10px;

      .line-one,
      .line-two,
      .line-three {
        height: 6px;
        width: 38px;
        background-color: black;
      }

      .line-one,
      .line-two {
        margin-bottom: 5px;
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
          position: relative;
          top: 0px;
          left: -5px;

          & div {
            transition: transform 0.2s;
          }

          & div.line-one {
            position: absolute;
            top: 0px;
            left: 0px;
            transform: rotate(45deg);
          }

          & div.line-two {
            visibility: hidden;
          }

          & div.line-three {
            position: absolute;
            top: 0px;
            left: 0px;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
`;

export { GraphCard };
