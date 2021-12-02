import styled from "styled-components";

const SideNav = styled.nav`
  &.nav {
    position: relative;
    background-color: rgba(15, 21, 68, 1);
    box-shadow: 0px 0px 10px gray;
    height: 100vh;

    .nav__expand {
      position: absolute;
      width: 1.7rem;
      height: 1.7rem;
      filter: invert(100%) sepia(16%) saturate(2%) hue-rotate(43deg)
        brightness(110%) contrast(100%);
      border-radius: 50%;
      right: 0rem;
      top: 1%;
      z-index: 100;
      cursor: pointer;
      transform: rotateZ(-180deg);
      transition: transform 200ms ease-in-out;

      &:hover {
        filter: invert(7%) sepia(100%) saturate(6882%) hue-rotate(247deg)
          brightness(116%) contrast(145%);
        box-shadow: 0px 0px 10px rgba(15, 21, 68, 1);
      }
    }

    .nav__list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &-item {
        list-style: none;
        transition: all 200ms ease-in;
        padding: 1rem 1.5rem;
        border-left: 6px solid transparent;
        cursor: pointer;

        &:first-child {
          margin: 1rem 0 0 0;
          flex-shrink: 0;

          & img {
            width: 2rem;
          }
        }

        /* &:hover {
          background-color: blue;

          .nav__list-item--disabled {
            background-color: none;
          }
        } */

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          color: gray;
          text-decoration: none;
          font-weight: 500;
        }

        img {
          fill: gray;
          width: 20px;

          &#line {
            width: 100%;
          }
        }

        &-link--active {
          img {
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(212deg)
              brightness(104%) contrast(103%);
          }
          p {
            color: white;
          }
        }
      }
    }
  }
  &.nav--closed .nav__expand {
    transform: rotateZ(0deg);
  }

  &.nav--closed .nav__list-item p {
    display: none;
  }

  &.nav--closed .nav__list-item img#line {
    width: 20px;
    height: 5px;
  }

  @media (max-width: 768px) {
    &.nav {
      width: 100%;
      height: 20%;
      .nav__expand {
        display: none;
      }
      .nav__list {
        flex-direction: row;
        &-item {
          &:first-child {
            margin: 0;
          }
        }
        .nav__list-item--disabled {
          display: none;
        }
      }
    }
  }
`;

export { SideNav };

// const StyledSidebar = styled.ul`
//   list-style: none;
//   background-color: ${(props) => props.backgroundColor};
//   color: ${(props) => props.textColor};
//   padding: 25px;
//   width: 200px;
//   height: 100vh;
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 12px;
//   padding-top: 45px;
// `;

// const SidebarListItem = styled.li`
//   .sidebar--item {
//     margin-bottom: 18px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     text-decoration: none;
//     color: #575877;
//   }

//   .active {
//     filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(212deg)
//       brightness(104%) contrast(103%);
//   }

//   .sidebar--icon {
//     max-width: 20px;
//   }
// `;
