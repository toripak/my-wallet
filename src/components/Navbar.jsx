import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// styles
import { Wrapper } from './Navbar.styles';

export const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <Wrapper>
      <h1>myWallet</h1>
      <ul>
        {/* render Login & Sign up links only if the user is not logged in */}
        {!user && (
          <>
            <NavLink to="login"><li>Login</li></ NavLink>
            <NavLink to="signup"><li>Sign up</li></NavLink>
          </>
        )}

        {/* render Logout only if the user is logged in */}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button
                onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </Wrapper>
  )
}
