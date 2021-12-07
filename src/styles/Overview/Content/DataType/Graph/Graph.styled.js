import styled from "styled-components";

const GraphCard = styled.div`
  &.graph {
    background-color: ${(props) => props.backgroundColor};
    border-radius: 8px;
    display: flex;
    padding: 0;
    flex-direction: row;
    font-size: 16px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .graph {
      &__container {
        /* width: 1000px;
        height: 546px; */
        flex-grow: 2;
        margin-top: 20px;
        margin-bottom: 20px;
        /* overflow: auto; */
        padding: 0;
        overflow: none;
      }
    }
  }
`;

export { GraphCard };
