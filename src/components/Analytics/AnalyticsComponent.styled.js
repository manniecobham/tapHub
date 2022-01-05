import styled from "styled-components";

export const Container = styled.div`
  &.analytics-container {
    // overflow hidden for sensors component at small size
    /* overflow-x: hidden; */
    max-width: 1240px;
    background-color: #e5e5e5;
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    /* border: 1px solid red; */

    //issue here
    padding-top: 80px;
  }
`;
