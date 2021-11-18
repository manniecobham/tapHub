import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderItem = styled.div`
  & > * {
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => props.headerColor};
  }
`;

export { HeaderContainer, HeaderItem };
