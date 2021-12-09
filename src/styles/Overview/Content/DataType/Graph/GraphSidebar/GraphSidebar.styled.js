import styled from "styled-components";

const SidebarContainer = styled.div`
  &.graph-sidebar {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    margin: 0;
    border: 4px solid white;
    border-radius: 10px;
    overflow: auto;

    @media (max-width: 1024px) {
      flex-direction: row;
    }

    .graph-sidebar {
      &__item {
        display: flex;
        flex-direction: column;
        background: rgba(242, 242, 242, 1);
        height: 100%;
        width: 100%;
        border-bottom: 1px solid lightgray;
        border-right: 1px solid lightgray;
        transition: background 0.2s ease-out;
        &:hover {
          background: white;
        }

        @media (max-width: 1024px) {
          justify-content: space-between;
          align-items: center;
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

            /* border: 1px solid black; */

            &-title {
              display: flex;
              flex-direction: column;
              color: darkslategray;
              margin: 20px 0 0 20px;
              /* border: 1px solid black; */

              @media (max-width: 1024px) {
                margin: 20px 0 0 0;
                align-self: center;
              }
            }
            &-value2 {
              display: flex;
              flex-direction: row;
              background: lightgray;
              border-radius: 5px;
              padding: 2px 10px 2px 10px;
              color: darkslategray;
              margin: 20px 20px 0 20px;
              align-self: center;
              /* border: 1px solid black; */

              @media (max-width: 1024px) {
                margin: 10px 5px 0 5px;
              }
            }
          }

          &__bottom {
            &-value1 {
              display: flex;
              padding-top: 5px;
              font-size: 24px;
              font-weight: 600;
              color: black;
              padding: 0 0 0 20px;
              /* border: 1px solid black; */

              @media (max-width: 1024px) {
                padding: 10px 0 10px 0;
              }
            }
          }
        }
      }
    }
  }
`;

const SidebarContentContainer = styled.div``;

export { SidebarContainer, SidebarContentContainer };
