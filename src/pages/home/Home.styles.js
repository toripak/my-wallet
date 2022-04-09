import styled from "@emotion/styled";

export const Wrapper = styled('div')`
  padding: 15px;
  display: grid;
  grid-template-columns: 2fr 1fr;  
  gap: .6rem;
  margin: 0 auto;
`;

export const TransactionList = styled('div')``;

export const Sidebar = styled('div')`
  padding: 10px;
  display: block;
  background: #2C5282;
  border-radius: 5px;
  color: #FFF;

  input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
    font-family: 'Raleway', sans-serif;
    margin: 10px;
    border-radius: 5px;
    max-width: 100%;
    outline: none;
    border: 0;
    color: #333;
  }

  input, label {
    padding: 7px;
  }

  button {
    margin: 5px 10px;
    color: #3182CE;
    background-color: #FFF;
  }

  h3 {
    margin: 10px 0;
    text-align: center;
  }

  `;
