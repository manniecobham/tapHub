import styled from "styled-components";

const SidebarContainer = styled.div`
  &.graph-sidebar {
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0;
    border: 4px solid white;
    border-radius: 10px;
    overflow: auto;

    @media (max-width: 1024px) {
      flex-direction: row;
    }

    @media (max-width: 768px) {
      display: none;
    }

    &--hamburger-open {
      display: flex;
      background-color: red;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 555;
      width: 100%;

      @media (max-width: 768px) {
        flex-direction: column;
        /* flex-wrap: wrap; */
      }
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

        & .sidebar-content {
          &__top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            /* border: 1px solid black; */

            @media (max-width: 1024px) {
              flex-direction: column;
              height: 70%;
              justify-content: space-between;
            }

            //this is new, commented is old
            @media (max-width: 768px) {
              flex-direction: row;
              justify-content: space-between;
              height: 70%;
              margin: 0 0 0 30px;

              /* border: 1px solid red; */

              /* flex-direction: column;
              height: 70%;
              justify-content: space-between; */
            }

            // this is new
            @media (max-width: 400px) {
              margin: 0 0 0 35px;
            }

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

              // this is new
              @media (max-width: 768px) {
                flex-direction: row;
                justify-content: space-between;
                height: 70%;
                margin-bottom: 10px;

                /* border: 1px solid red; */
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
              font-size: 14px;

              /* border: 1px solid red; */

              @media (max-width: 1100px) {
                font-size: 11px;
              }

              @media (max-width: 1024px) {
                margin: 10px 5px 0 5px;
                font-size: 14px;
              }

              //this is new
              @media (max-width: 768px) {
                margin: 20px 5px 0 5px;
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

              @media (max-width: 500px) {
                font-size: 16px;
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
