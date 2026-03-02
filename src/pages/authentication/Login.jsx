import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import users from './../../lib/users.json'; // Import the users data from lib/users.json

const Login = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate(); // Use navigate instead of history

  const handleLogin = () => {
    const user = users.find(user => user.id === userId);
    if (user) {
      setMessage('Login Successful!');
      setIsError(false);
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store user data in localStorage

      // Redirect to the appropriate page based on role
      if (user.role === 'admin') {
        navigate('/getadmin'); // Use navigate for redirection
      } else {
        navigate('/getuser'); // Use navigate for redirection
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
        onKeyPress={handleKeyPress} // Add key press listener
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