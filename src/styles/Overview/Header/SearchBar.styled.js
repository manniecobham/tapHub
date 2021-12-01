import styled from "styled-components";

const SearchForm = styled.form`
  min-width: 400px;
  display: flex;
  & > input[type="text"] {
    width: 90%;
    padding: 10px;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    border: 1px solid #e2e6e8;
    border-right: none;
  }
  & > button {
    width: 10%;
    padding: 10px;
    background-color: white;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top: 1px solid #e2e6e8;
    border-bottom: 1px solid #e2e6e8;
    border-right: 1px solid #e2e6e8;
    border-left: none;
  }
  & > button:hover {
    background-color: #999999;
  }
`;

export { SearchForm };
