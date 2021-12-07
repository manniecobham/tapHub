import styled from "styled-components";

const OverviewGrid = styled.div`
  &.overview-grid {
    margin-top: 20px;
    display: grid;
    gap: 30px;
    grid-template-areas:
      "location location rooms      co2"
      "location location lightwaste hcwaste"
      "graph    graph    graph      graph";

    .overview-grid {
      &__item {
        padding: 17px;

        &-location {
          grid-area: location;
        }

        &-rooms {
          grid-area: rooms;
        }

        &-co2 {
          grid-area: co2;
        }

        &-lightwaste {
          grid-area: lightwaste;
        }

        &-hcwaste {
          grid-area: hcwaste;
        }

        &-graph {
          grid-area: graph;
        }
      }
    }

    @media (max-width: 768px) {
      grid-template-areas:
        "location location"
        "rooms co2"
        "lightwaste hcwaste"
        "graph graph";
    }
  }
`;

export { OverviewGrid };
