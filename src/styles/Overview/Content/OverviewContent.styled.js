import styled from "styled-components";

const OverviewGrid = styled.div`
  max-width: 1024px;
  margin-top: 20px;
  display: grid;
  gap: 30px;
  grid-template-areas:
    "location location rooms      co2"
    "location location lightwaste hcwaste"
    "graph    graph    graph      graph";

  .grid--item {
    padding: 17px;
  }

  .grid--item_small {
    min-width: 258px;
  }

  .location {
    grid-area: location;
    min-width: 546px;
  }

  .rooms {
    grid-area: rooms;
  }

  .co2 {
    grid-area: co2;
  }

  .lightwaste {
    grid-area: lightwaste;
  }

  .hcwaste {
    grid-area: hcwaste;
  }

  .graph {
    grid-area: graph;
    max-width: 1200px;
  }
`;

export { OverviewGrid };
