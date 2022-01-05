import styled from "styled-components";

export const Container = styled.div`
  &.sensors {
    display: flex;
    height: 120px;
    justify-content: space-around;
    background: rgb(247, 242, 243);
    padding: 0 20px 0 20px;
    gap: 30px;

    .sensors {
      &-box {
        padding: 20px 0 10px 0;
        background: rgb(255, 255, 255);
        border-radius: 8px 8px 0 0;
        width: 100%;
        height: 100%;
        position: relative;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &-info {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 20px;

          .img-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 50px;
            border-radius: 5px;
            box-shadow: 0px 3px 5px grey;
            background: #f8f5f5;

            img {
              height: 30px;
            }
          }

          .info-container {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 120px;

            /* border: 1px solid red; */

            .text {
              font-size: 14px;
              margin-top: 5px;
            }

            .room-average {
              font-size: 10px;
              margin-top: 5px;
            }
          }
        }

        .graybox {
          position: absolute;
          height: 10px;
          width: 100%;
          bottom: 0;
          /* margin-left: -10px; */
        }

        :hover {
          background: #ebebeb;

          .graybox {
            background: rgb(119, 119, 119);
          }
        }
      }
    }

    @media (max-width: 1240px) {
      gap: 15px;

      .sensors {
        &-box {
          &-info {
            .img-container {
              height: 40px;
              width: 40px;
            }
          }
        }
      }
    }

    @media (max-width: 1124px) {
      .sensors {
        &-box {
          &-info {
            .img-container {
              display: none;
            }
          }
        }
      }
    }

    @media (max-width: 760px) {
      &.sensors {
        justify-content: space-between;
        overflow-x: scroll;
        /* border: 1px solid red; */
        .sensors {
          &-box {
            padding: 20px 0 10px 10px;
            &-info {
              .img-container {
                display: flex;
              }
            }
            .graybox {
              margin-left: -10px;
            }
          }
        }
      }
    }
  }
`;
