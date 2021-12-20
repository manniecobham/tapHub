import styled from "styled-components";

const RegisterHeader = styled.img`
  display: block;
  margin: auto;
  margin-top: 30px;
`;

const RegisterForm = styled.form`
  margin: 20px auto 0px auto;
  max-width: 542px;
  border: 3px solid #c4c4c4;
  background-color: white;

  .form {
    &__title {
      text-align: center;
      padding: 25px 0px 17px;
    }

    &__inputs {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .form-control {
        margin: 0px 36px;
        display: flex;
        flex-direction: column;
        gap: 14px;

        label {
          font-weight: bold;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: -0.2px;
        }

        input {
          background: white;
          border: 3px solid #c4c4c4;
          border-radius: 5px;
          width: 100%;
          padding: 15px 21px 16px 15px;
          color: #777777;

          &:focus,
          &:active {
            outline-color: #0b7bff;
          }
        }

        &--invalid {
          label {
          }

          input {
            border: 3px solid #cd564c;
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
    }

    &__actions {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        margin-top: 25px;
        margin-bottom: 48px;
        background: #0b7bff;
        border-radius: 5px;
        padding: 19px 35px;
        font-weight: 500;
        font-size: 28px;
        color: white;
      }
    }
  }
`;

const RegisterFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    color: #777777;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.2px;
  }

  .login {
    cursor: pointer;
    text-decoration: none;
    color: #3a88e3;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.2px;
  }
`;

export { RegisterHeader, RegisterForm, RegisterFooter };
