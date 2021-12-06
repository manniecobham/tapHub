import styled from "styled-components";

const ProfileContainer = styled.div`
  .profile__arrow {
    margin-left: 10px;
    transition: all 200ms ease-in;
    &-active {
      transform: rotateZ(180deg);
    }
  }
`;

const ProfileDropdownList = styled.ul`
  z-index: 10;
  position: absolute;
  right: 0px;
  display: flex;
  flex-direction: column;
  list-style: none;
  background: white;
  border-radius: 10px;
  padding: 4px;
  box-shadow: 0px 0px 5px;
`;

const ProfileListItem = styled.li`
  width: 233px;
  background-color: white;
  padding: 0px;
  margin: 0px;

  & > button {
    background-color: inherit;
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  & > button:hover {
    background-color: lightgray;
  }
`;

const ProfileIcon = styled.img`
  max-width: 100%;
  height: auto;
  margin: 11px 25px;
`;

export { ProfileContainer, ProfileIcon, ProfileDropdownList, ProfileListItem };
