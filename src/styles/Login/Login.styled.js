import styled from "styled-components";

const LoginContainer = styled.div`
  &.login-form {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-flow: column;

    .login-form {
      &__image {
        display: flex;
        flex: 1;

        & > img {
          margin-top: 100px;
          width: 30px;
          height: 30px;
        }
      }

      &__tagline {
        flex: 1;
        font-size: 18px;
        text-align: center;

        .lead {
          font-size: 64px;
          line-height: 75px;
        }
      }

      &__form {
        display: flex;
        flex: 2;
      }

      &__footer {
        line-height: 40px;
        position: absolute;
        bottom: 0;
      }
    }
  }
`;

export { LoginContainer };
