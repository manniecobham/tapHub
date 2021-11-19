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
    color: inherit;
  }

  .inactive {
    filter: invert(52%) sepia(0%) saturate(1370%) hue-rotate(121deg)
      brightness(97%) contrast(87%);
  }

  .sidebar--icon {
    max-width: 20px;
  }
`;

export { SidebarListItem, StyledSidebar };
