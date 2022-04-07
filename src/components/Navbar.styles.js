
import styled from '@emotion/styled';

export const Wrapper = styled('nav')`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #EBF4FF;
  padding: 1rem;

  h1 {
    font-size: 1.3rem;
    margin-right: auto;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: 150px;
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
  }
  
  .active {
    li {
      text-decoration: none;
      border-bottom: 2px solid red;
    }
  }
  `;