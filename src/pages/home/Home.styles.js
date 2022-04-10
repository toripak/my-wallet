import styled from "@emotion/styled";

export const Wrapper = styled('div')`
  max-width: 85%;
  padding: 15px;
  display: grid;
  grid-template-columns: 2fr 1fr;  
  gap: .7rem;
  margin: 0 auto;
`;

export const TransactionContainer = styled('ul')`
  li {
    margin: 20px;
    padding: 10px 7px;
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
    font-size: 1.2em;
  }

  .amount {
    margin-left: auto;
    font-weight: bold;
    font-size: 1.3em;
  }

  button {
    margin-left: 6px;
    font-size: .6rem;
    color: #E53E3E;
    border-color: #E53E3E;
  }

  button:hover{
    background-color: transparent;
  }
`;

export const Sidebar = styled('div')`
  max-width: 180px;
  padding: 10px;
  display: block;
  background: #2C5282;
  border-radius: 5px;
  color: #FFF;
  max-height: 230px;

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
