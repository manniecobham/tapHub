import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* max-width: 1200px; */
  .header__left-content {
  }

  .header__right-content {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-around;
    & > * {
      flex-shrink: 0;
    }
  }
`;

const HeaderItem = styled.div`
  & > * {
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => props.headerColor};
  }
`;

export { HeaderContainer, HeaderItem };
