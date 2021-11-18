import styled from "styled-components";

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
    background-color: gray;
  }
`;

const ProfileIcon = styled.img`
  max-width: 100%;
  height: auto;
  margin: 11px 25px;
`;

export { ProfileIcon, ProfileListItem };
