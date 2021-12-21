import styled from "styled-components";
import { Card } from "../../../styles/UI/Card.styled";

export const Container = styled.div`
  &.analytics-container {
    background-color: #e5e5e5;

    display: flex;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    padding-top: 80px;
    flex-flow: column;

    .comparison {
      display: flex;
      background: rgb(247, 242, 243);
      justify-content: space-between;

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

    .sensors {
      display: flex;
      height: 150px;
      justify-content: space-around;
      background: rgb(247, 242, 243);
      padding: 0 20px 0 20px;
      gap: 30px;

      &-box {
        padding: 10px;
        /* background: ${(props) => props.background}; */
        background: rgb(255, 255, 255);
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
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

            .word {
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
        }

        :hover {
          background: #ebebeb;

          .graybox {
            background: rgb(119, 119, 119);
          }
        }
      }
    }

    .analysis {
      margin: 20px 20px 20px 20px;
      gap: 30px;
      display: grid;
      height: 100%;
      grid-template-areas:
        "graph graph performance"
        "graph graph performance"
        "dropdown dropdown floor";
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;

      .analytics-card {
        background: rgb(255, 255, 255);
      }

      &__graph {
        grid-area: graph;
      }

      &__performance {
        grid-area: performance;
      }

      &__dropdown {
        grid-area: dropdown;
      }

      &__floor {
        grid-area: floor;
      }
    }
  }
`;
