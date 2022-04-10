
import styled from '@emotion/styled';

export const Wrapper = styled('nav')`
  display: flex;
  align-items: center;
  background-color: #EBF4FF;
  padding: 1rem;

  h1 {
    font-size: 1.3rem;
    margin-right: auto;
    margin-left: .5rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 1.5rem;
  }

  li {
    margin: 0 .5rem;
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