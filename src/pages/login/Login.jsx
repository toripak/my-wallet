import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

//styles
import { Form } from './Login.styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!isLoading && <button>Login</button>}
      {isLoading && <button disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </Form>
  )
}
