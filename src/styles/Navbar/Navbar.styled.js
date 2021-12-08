import styled from "styled-components";

const NavbarStyled = styled.header`
  /* header element */
  position: fixed;
  width: 100%;
  z-index: 4444;
  background-color: rgba(15, 21, 68, 1);
  box-shadow: 0px 0px 10px gray;
  height: 5rem;

  /* div element */
  & > .container__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* hamburger */
  .hamburger {
    z-index: 5555;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border: none;
    display: none;
    cursor: pointer;
    transition: all 2s ease-in;

    .line-one,
    .line-two,
    .line-three {
      height: 6px;
      width: 38px;
      background-color: white;
    }

    .line-one,
    .line-two {
      margin-bottom: 5px;
    }
  }

  /* nav element */
  .nav {
    &__list {
      display: flex;
      gap: 3rem;
      list-style: none;
      text-align: center;
      align-items: center;
      transition: all 200ms ease-in;
      border-left: 6px solid transparent;
      cursor: pointer;

      &-item {
        .logo {
          width: 40px;
          &__image {
            width: 100%;
          }
        }

        a {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: gray;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 2px solid transparent;
          transition: all 0.6s ease-in;
        }

        img {
          fill: gray;
          width: 20px;
        }

        &:not(:first-child):hover {
          a {
            border-bottom: 2px solid gray;
          }
        }
      }
    }

    &__link--active {
      border-bottom: 2px solid white !important;

      img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(212deg)
          brightness(104%) contrast(103%);
      }

      p {
        color: white;
      }
    }
  }

  .extra-logo {
    display: none;
  }

  /* profile and notifications */
  .actions {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  @media (max-width: 1080px) {
    .nav {
      &__list {
        gap: 1.5rem;
        &-item {
          a {
            flex-direction: column;
            gap: 0.2rem;
            img {
              height: 20px;

              &.logo__image {
                height: auto;
              }
            }
          }
        }
      }
    }

    .actions {
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .extra-logo {
      display: block;
      width: 40px;

      .logo__image {
        width: 100%;
      }
    }

    .nav {
      display: none;
    }

    .hamburger {
      display: flex;
    }

    &.header--full {
      height: 100%;

      .actions {
        display: none;
      }

      .extra-logo {
        display: none;
      }

      .hamburger--open {
        position: relative;

        & div {
          transition: transform 0.2s ease-in;
        }

        & div.line-one {
          position: absolute;
          top: 100%;
          left: 0%;
          transform: rotate(45deg);
        }

        & div.line-two {
          visibility: hidden;
        }

        & div.line-three {
          position: absolute;
          top: 100%;
          left: 0%;
          transform: rotate(-45deg);
        }
      }

      .nav {
        display: flex;
        &--open {
          .nav__list {
            position: absolute;
            top: 10%;
            left: 40%;
            z-index: 250;
            color: white;
            display: flex;
            flex-direction: column;
            gap: 4rem;

            &-item {
              a {
                flex-direction: row;
                gap: 10px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    &.header--full {
      .nav {
        &--open {
          .nav__list {
            left: 35%;
          }
        }
      }
    }
  }

  @media (max-width: 380px) {
    &.header--full {
      .nav {
        &--open {
          .nav__list {
            left: 30%;
          }
        }
      }
    }
  }
`;

export { NavbarStyled };
