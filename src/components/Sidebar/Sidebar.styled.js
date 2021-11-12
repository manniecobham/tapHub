import styled from "styled-components";

const StyledSidebar = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 25px;
  width: 200px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 45px;

  .sidebar--item {
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .sidebar--icon {
    height: 18px;
    width: 18px;
  }

  .main {
  }

  .main--icon {
    height: 23px;
    width: 26px;
    margin: auto;
  }

  .analytics img {
    width: 17px;
    height: 10px;
  }

  .reports img {
    width: 14px;
    height: 17px;
  }

  .sensors img {
    width: 15px;
    height: 15px;
  }

  .property img {
    width: 20px;
    height: 20px;
  }
`;

export default StyledSidebar;
