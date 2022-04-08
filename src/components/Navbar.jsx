import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import { Wrapper } from './Navbar.styles';

export const Navbar = () => {
  const { logout } = useLogout();

  return (
    <Wrapper>
      <h1>myWallet</h1>
      <ul>
        <NavLink to="login"><li>Login</li></ NavLink>
        <NavLink to="signup"><li>Sign up</li></NavLink>
        <li>
          <button
            onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </Wrapper>
  )
}
