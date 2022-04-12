import styled from "@emotion/styled";

export const Wrapper = styled('div')`
  padding: 15px;
  display: grid;
  grid-template-columns: 2fr 1fr;  
  gap: .6rem;
  margin: 0 auto;
  max-width: 90%;
`;

export const TransactionContainer = styled('ul')`
  
  li {
    margin-bottom: 10px;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    border: 1px solid #FDFDFD;
    box-shadow: 3px 3px 6px rgba(59, 140, 216, 0.3);
    border-left: 3px solid #3182CE;
  }

  .total {
    margin-top: 40px;
    border-left: 3px solid #E53E3E;
  }

  .name {
    font-size: .9em;
  }

  .amount {
    margin-left: auto;
    font-weight: bold;
    font-size: 1.1em;
  }

  button {
    margin: 6px;
    font-size: .6rem;
    color: #E53E3E;
    border-color: #E53E3E;
  }

  button:hover{
    background-color: transparent;
  }
`;

export const Sidebar = styled('div')`
  max-width: 150px;
  padding: 5px;
  display: block;
  background: #2C5282;
  border-radius: 5px;
  color: #FFF;
  max-height: 250px;

  input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
    font-family: 'Raleway', sans-serif;
    margin: 10px;
    border-radius: 5px;
    max-width: 80%;
    outline: none;
    border: 0;
    color: #333;
  }

  input, label {
    padding: 7px;
  }

  button {
    margin: 5px auto;
    padding: 5px;
    color: #3182CE;
    background-color: #FFF;
  }

  h3 {
    margin: 10px 0;
    text-align: center;
  }

  `;
