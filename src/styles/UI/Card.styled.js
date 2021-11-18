import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 25px;
`;

const CardTitle = styled.h2`
  font-size: ${(props) => props.titleSize};
  line-height: 21px;
  letter-spacing: 0.4px;
`;

const CardContent = styled.div`
  .lead {
    font-size: 40px;
    font-weight: bold;
    color: #172c41;
  }
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
