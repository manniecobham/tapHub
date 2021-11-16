import styled from "styled-components";

export const GraphNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: lightgray;
  margin-right: 30px;
`;

export const Button = styled.button`
  border: none;
  font-weight: 600;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
`;
export const TimeDisplayContainer = styled.div`
  display: flex;
`;

export const TimeDisplay = styled.span`
  font-size: 30px;
`;
