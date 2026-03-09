import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from './../../lib/users.json';

const Login = ({ setUser }) => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundUser = users.find(user => user.id === userId);

    if (foundUser) {
      setMessage('Login Successful!');
      setIsError(false);

      // Save to localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));

      // Update App state
      setUser(foundUser);

      // Redirect based on role
      if (foundUser.role === 'admin') {
        navigate('/getadmin');
      } else {
        navigate('/getuser');
      }

    } else {
      setMessage('Invalid ID. Please try again.');
      setIsError(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter your ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <button onClick={handleLogin}>Login</button>

      {message && (
        <p style={{ color: isError ? 'red' : 'green' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;