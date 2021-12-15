import styled from "styled-components";

const LoginContainer = styled.div`
  &.login {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .login {
      &__image {
        display: flex;
        /* flex: 1; */

        & > img {
          margin-top: 100px;
          width: 30px;
          height: 30px;
        }
      }

      &__tagline {
        /* flex: 1; */
        font-size: 18px;
        text-align: center;

        .lead {
          font-size: 64px;
          line-height: 75px;
        }
      }

      &__email {
        font-size: 18px;
        line-height: 21px;
        color: #172c41;
        border: none;
      }

      &__form {
        /* flex: 1; */
        /* border: 2px solid red; */
        display: flex;
        flex-direction: column;

        .form {
          &-control {
            width: 367px;

            &:first-child {
              margin-bottom: 84px;
            }

            label {
              display: block;
              visibility: hidden;
              height: 0;
            }

            input {
              width: 100%;
              outline: none;
              border: none;
              background: none;
              border-bottom: 1px solid #222222;
              font-size: 18px;
            }
          }

          &__actions {
            display: flex;
            flex-direction: column;
            margin-top: 13px;
            gap: 45px;

            div {
              display: flex;
              justify-content: space-between;

              .forgot {
                border: none;
                color: #172c41;
                font-size: 18px;
                line-height: 21px;
              }

              .signup {
                text-decoration: none;
                color: #3a88e3;
                font-size: 18px;
                line-height: 21px;
              }
            }

            .signin {
              margin: auto;
              border-radius: 50px;
              background: #172c41;
              min-width: 160px;
              padding: 10px 52px;
              color: #fbfbfb;
              font-size: 18px;
              line-height: 21px;
            }
          }
        }

        &--invalid {
          input {
            border-bottom: 1px solid #cd564c;
          }
        }

        .error-text {
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: -0.2px;
          color: #cd564c;
        }
      }

      &__footer {
        line-height: 40px;
      }
    }
  }

  button {
    cursor: pointer;
  }
`;

export { LoginContainer };
