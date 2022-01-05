import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 35px;
  width: 100vw;
  left: 65%;
  top: 105px;
  /* top: 150px; */
  z-index: 2;
  width: 332px;
  height: 100px;
  /* background: red; */

  .rdrDefinedRangesWrapper {
    display: none;
  }

  .submit {
    background: lightgray;
    width: 332px;
    text-align: center;
    cursor: pointer;
  }
`;
