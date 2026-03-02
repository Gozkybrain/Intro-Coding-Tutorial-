import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GetUser from './pages/authentication/GetUser';
import GetAuth from './pages/authentication/GetAuth';
import GetAdmin from './pages/authentication/GetAdmin';
import Login from './pages/authentication/Login';


const App = () => {
  const [user, setUser] = useState(null);

  // Check user in localStorage when the app loads
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser); // Set user from localStorage
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* If the user is authenticated, redirect from / to the appropriate page */}
        <Route
          path="/"
          element={user ?
            <Navigate
              to={user.role ===
                'admin' ?
                '/getadmin' :
                '/getuser'} /> :
            <GetAuth />}
        />

        {/* Protect /getuser route */}
        <Route
          path="/getuser"
          element={user ? <GetUser /> : <Navigate to="/login" />}
        />

        {/* Protect /getadmin route */}
        <Route
          path="/getadmin"
          element={user && user.role === 'admin' ? <GetAdmin /> : <Navigate to="/getuser" />}
        />

        {/* If no user is logged in, show GetAuth page */}
        {!user && <Route path="/" element={<GetAuth />} />}
      </Routes>
    </Router>
  );
}

export default App;