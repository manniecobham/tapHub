import styled from "styled-components";

const SidebarContainer = styled.div`
  &.graph-sidebar {
    display: flex;
    flex-direction: column;
    /* width: 20%; */
    /* height: 546px; */
    height: 100%;
    margin: 0;
    border: 4px solid white;
    border-radius: 10px;
    overflow: auto;
    @media (max-width: 1024px) {
      flex-direction: row;
    }
    @media (max-width: 768px) {
      flex-direction: row;
    }
    .graph-sidebar {
      &__item {
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
        background: rgba(242, 242, 242, 1);
        height: 100%;
        width: 100%;
        border-bottom: 1px solid lightgray;
        /* border-right: 1px solid lightgray; */
        transition: background 0.2s ease-out;
        &:hover {
          background: white;
        }
        @media (max-width: 1024px) {
          justify-content: space-between;
        }
        @media (max-width: 768px) {
          justify-content: space-between;
        }

        & .sidebar-content {
          &__top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            @media (max-width: 1024px) {
              flex-direction: column;
              height: 70%;
              justify-content: space-between;
            }
            @media (max-width: 768px) {
              flex-direction: column;
              height: 70%;
              justify-content: space-between;
            }

            & > h3 {
              display: flex;
              flex-direction: column;
              color: darkslategray;
              margin-right: 30px;
            }
            & > div {
              display: flex;
              flex-direction: row;
              background: lightgray;
              border-radius: 5px;
              padding: 2px 10px 2px 10px;
              color: darkslategray;
            }
          }

          &__bottom {
            display: flex;
            padding-top: 5px;
            font-size: 24px;
            font-weight: 600;
            color: black;
          }
        }
      }
    }
  }
`;

const SidebarContentContainer = styled.div`
  &.sidebar-content {
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    background: rgba(242, 242, 242, 1);
    height: 100%;
    width: 100%;
    border-bottom: 1px solid lightgray;
    /* border-right: 1px solid lightgray; */
    transition: background 0.2s ease-out;
    &:hover {
      background: white;
    }
    @media (max-width: 1024px) {
      justify-content: space-between;
    }
    @media (max-width: 768px) {
      justify-content: space-between;
    }

    .sidebar-content {
      &__top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media (max-width: 1024px) {
          flex-direction: column;
          height: 70%;
          justify-content: space-between;
        }
        @media (max-width: 768px) {
          flex-direction: column;
          height: 70%;
          justify-content: space-between;
        }
      }

      .content-title {
        display: flex;
        flex-direction: column;
        color: darkslategray;
        margin-right: 30px;
      }

      .relative-change {
        display: flex;
        flex-direction: row;
        background: lightgray;
        border-radius: 5px;
        padding: 2px 10px 2px 10px;
        color: darkslategray;
      }

      &__bottom {
        display: flex;
        padding-top: 5px;
        font-size: 24px;
        font-weight: 600;
        color: black;
      }
    }
  }
`;

export { SidebarContainer, SidebarContentContainer };
