import styled from "styled-components";

const GraphCard = styled.div`
  &.graph-grid {
    background-color: ${(props) => props.backgroundColor};
    border-radius: 8px;
    display: grid;
    padding: 0;
    flex-direction: row;
    font-size: 16px;
    grid-template-areas: "sidebar graph";

    @media (max-width: 1024px) {
      flex-direction: column;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .graph-grid {
      &__sidebar {
        grid-area: sidebar;
      }
      &__container {
        &-outer {
          grid-area: graph;
          margin-left: 1rem;
          width: 100%;
        }
        &-inner {
          flex-grow: 2;
          margin-top: 20px;
          margin-bottom: 20px;
          padding: 0;
          overflow: none;
        }
      }
    }
  }
`;

export { GraphCard };
