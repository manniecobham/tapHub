import styled from "styled-components";

const HeaderItem = styled.div`
  & > * {
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => props.headerColor};
  }
`;

export default HeaderItem;
