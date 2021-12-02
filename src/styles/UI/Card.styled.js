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
  color: rgba(119, 119, 119, 1);
`;

const CardTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.4px;
`;

const CardContent = styled.div`
  background-color: ${(props) => props.backgroundColor};
  color: rgba(119, 119, 119, 1);

  .img {
    margin-top: 10px;
    width: 100%;
    object-fit: cover;
  }

  .lead {
    font-size: 40px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin-right: 7px;
  }

  .toggle {
  }
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: rgba(119, 119, 119, 1);

  .relative-change {
    display: flex;
    gap: 7px;

    span {
      margin-right: 2px;
    }

    &--active {
      & img {
        filter: invert(45%) sepia(58%) saturate(1942%) hue-rotate(193deg)
          brightness(95%) contrast(87%);
      }
      & p span {
        color: #3a88e3;
      }
    }
  }
`;

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
