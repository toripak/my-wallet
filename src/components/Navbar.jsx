import React from 'react';
import { NavLink } from 'react-router-dom';

import { Wrapper } from './Navbar.styles';

export const Navbar = () => {
  return (
    <Wrapper>
      <h1>myWallet</h1>
      <ul>
        <NavLink to="login"><li>Login</li></ NavLink>
        <NavLink to="signup"><li>Sign up</li></NavLink>
      </ul>
    </Wrapper>
  )
}
