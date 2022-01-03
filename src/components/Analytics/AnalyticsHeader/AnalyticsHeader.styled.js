import styled from "styled-components";

export const Container = styled.div`
  &.comparison {
    display: flex;
    background: rgb(247, 242, 243);
    justify-content: space-between;

    .comparison {
      &__rooms {
        display: flex;

        .room {
          display: flex;
          align-items: center;
          height: 60px;
          font-size: 24px;
          border-right: 2px solid #c0c0c0;
          padding: 0 40px 0 20px;
          margin: 20px;
          color: rgb(119, 119, 119);
        }

        .add-room {
          display: flex;
          align-items: center;
          height: 60px;
          font-size: 20px;
          margin: 20px;
          color: #c0c0c0;
          cursor: pointer;

          img {
            padding: 0 20px 0 0;
          }

          :hover {
            color: rgb(119, 119, 119);

            /* img {
              color: rgb(119, 119, 119);
            } */
          }
        }
      }

      &__datepicker-download {
        display: flex;
        align-items: center;
        font-size: 24px;
        padding-right: 20px;

        .download {
          display: flex;
          height: 45px;
          width: 45px;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          margin-left: 20px;
          background: rgb(255, 255, 255);
          box-shadow: 0px 0px 5px lightgray;
          cursor: pointer;

          :hover {
            background: #ebebeb;
          }
        }
      }
    }
  }
`;
