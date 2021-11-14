import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Card;
