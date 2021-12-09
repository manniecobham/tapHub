import styled from "styled-components";

const HeaderContainer = styled.div`
  &.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .header {
      &__left-content {
        &-item {
          color: rgba(160, 168, 177, 1);
          font-size: 18px;
          line-height: 21px;
        }
      }

      &__right-content {
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: space-around;
        &-item {
          flex-shrink: 0;
        }
      }
    }
  }
`;

export { HeaderContainer };
