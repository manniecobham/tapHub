import styled from "styled-components";

const StyledSidebar = styled.ul`
  list-style: none;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 25px;
  width: 200px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 45px;
`;

const SidebarListItem = styled.li`
  .sidebar--item {
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #575877;
  }

  .active {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(212deg)
      brightness(104%) contrast(103%);
  }

  .sidebar--icon {
    max-width: 20px;
  }
`;

export { SidebarListItem, StyledSidebar };
