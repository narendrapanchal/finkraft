import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
const LoginForm = ({ onLogin }) => {
  const { setUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault()
    onLogin(username,password)
    // Implement authentication logic using authService and validate user input.
    // If authentication is successful, call onLogin(username) to set the user's session.
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
