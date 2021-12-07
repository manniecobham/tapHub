import styled from "styled-components";

const NotificationContainer = styled.div`
  &.notifications {
    position: relative;

    .notifications {
      &__button-new {
        fill: lightblue;
        position: absolute;
        top: 0;
        right: -5px;
      }
    }
  }
`;

const NotificationDropdownContainer = styled.div`
  &.notifications-dropdown {
    z-index: 10;
    position: absolute;
    display: flex;
    right: 0px;
    flex-direction: column;
    gap: 15px;
    list-style: none;
    background: white;
    border-radius: 10px;
    padding: 16px 26px 4px 22px;
    box-shadow: 0px 0px 5px;
    width: 529px;
    max-height: 660px;
    overflow: auto;

    .notifications-dropdown {
      &__list {
        list-style: none;
      }
    }
  }
`;

const NotificationListItem = styled.li`
  &.notif-list {
    .notif-list {
      &__button {
        padding-right: 18px;
        border: none;
        background: rgba(11, 123, 255, 0.05);
        border-radius: 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 7px;
        cursor: pointer;

        &--read {
          background-color: white;
        }

        &:hover {
          background-color: lightgray;
        }
      }

      &__item {
        &--vertical {
          width: 10px;
          min-height: 120px;
          background-color: rgba(11, 123, 255, 1);
          border-radius: 5px 0px 0px 5px;

          & > div {
            width: 100%;
            height: 100%;
          }
        }

        &-icon {
          margin: auto 10px auto 10px;
        }

        &-content {
          flex-grow: 2;

          &-title {
            display: flex;
            justify-content: space-between;
            padding: 10px 0px 5px 0px;

            .lead {
              font-weight: bold;
              font-size: 20px;
              line-height: 28px;
              letter-spacing: -0.2px;
            }
          }

          &-message {
            text-align: left;
            padding: 5px 0px 10px 0px;
          }
        }
      }
    }
  }
`;

export {
  NotificationContainer,
  NotificationListItem,
  NotificationDropdownContainer,
};
