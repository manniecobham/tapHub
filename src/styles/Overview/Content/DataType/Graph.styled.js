import styled from "styled-components";

const GraphCard = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  display: flex;
  padding: 0;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GraphContainer = styled.div`
  /* width: 1000px;
  height: 546px; */
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  /* overflow: auto; */
  padding: 0;
  overflow: none;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 400px;
  height: 546px; */
  height: 100%;
  margin: 0;
  border: 4px solid white;
  border-radius: 10px;
  overflow: auto;
  @media (max-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const SidebarContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: rgba(242, 242, 242, 1);
  height: 100%;
  width: 100%;
  border-bottom: 1px solid lightgray;
  /* border-right: 1px solid lightgray; */
  transition: background 0.2s ease-out;
  &:hover {
    background: white;
  }
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const SidebarContentTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    height: 70%;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 70%;
    justify-content: space-between;
  }
`;

const SidebarText = styled.span`
  display: flex;
  flex-direction: column;
  color: darkslategray;
  margin-right: 30px;
`;

const SidebarRelativeChange = styled.span`
  display: flex;
  flex-direction: row;
  background: lightgray;
  border-radius: 5px;
  padding: 2px 10px 2px 10px;
  color: darkslategray;
`;

const SidebarContentBottom = styled.div`
  display: flex;
  padding-top: 5px;
  font-size: 32px;
  font-weight: 600;
  color: black;
`;

export {
  GraphCard,
  GraphContainer,
  SidebarContainer,
  SidebarContentContainer,
  SidebarContentTop,
  SidebarText,
  SidebarRelativeChange,
  SidebarContentBottom,
};
