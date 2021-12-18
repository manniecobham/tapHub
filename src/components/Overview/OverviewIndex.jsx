import React, { useEffect } from "react";

import Container from "../../styles/UI/Container.styled.js";

import Content from "./Content/Content";

const OverviewIndex = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://1shngynrl9.execute-api.us-east-1.amazonaws.com/overview/getobtaindata",
        {
          method: "POST",
          headers: {
            Authorization:
              "eyJraWQiOiJZUDA2OVdFUlwvOXd3UklCSEVMNnAzRzRBZ0l0dHprelphd2RuRVZ5MG5zbz0iLCJhbGciOiJSUzI1NiJ9.eyJvcmlnaW5fanRpIjoiMjc4OTJkZmEtNTAxOS00MmQxLThlYjMtYjQ0ZWI1OTg3MTNhIiwic3ViIjoiMzA0ZjU0YzUtOTMzZS00YzNkLThjNWUtZmJjZTgzZjEwZjFiIiwiZXZlbnRfaWQiOiJlZmE0ZTRlYS1hYWIzLTRmNzEtYmI0ZC0wYjllNDE1ZWVkYjUiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjM5NzYxNDU1LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9NMUFkc0NXRUQiLCJleHAiOjE2Mzk3NjUwNTUsImlhdCI6MTYzOTc2MTQ1NSwianRpIjoiYWQwNzg5NmEtOWU5My00ZWMzLTgzNmYtNDI3MGU2ZDhkNDAyIiwiY2xpZW50X2lkIjoiM3NzbWY4Y29kcWk0MjBxYW1odWdmM21wMHIiLCJ1c2VybmFtZSI6IndhcnJlbiJ9.Dprym5L2WNwJzsYmZthCzkYszsxZLYgkXU2ORTn7aExgVUBdxQoxbWobb6plrM6gg5pPKch5b08XxGnJB-9WitAV_v2LH6ZHPHzusnwCqpMRb71TbQ2c0du9R3Gp2xoNYYMA6lTIaDMcp6b3Q90KLK9pyg-d87Zl2oeHtI2DuQojC9GWVFpAXVQXYuPY3VptRIbF8zjHF2zEVcaSWX-U_mDW7Eoj0gnp177SZZZNBor2pJzo3NxplrILMm7m-VT-8gR0XdV6bjxs08tAyLSTxqXaYziNKy8b6TS4wJlTkR_YvNPU-hr2Yz-IdPMGzb9h1b1CNO294k2kbJm6_CcEcg",
          },
        }
      );

      console.log("Inside overviewindex");
      console.log(response);
      const responseData = await response.json();
      console.log(responseData);
    };
    fetchData();
  });

  return (
    <Container className={props.className}>
      <Content />
    </Container>
  );
};

export default OverviewIndex;
