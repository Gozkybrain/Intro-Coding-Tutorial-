import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GetUser from './pages/authentication/GetUser';
import GetAuth from './pages/authentication/GetAuth';
import GetAdmin from './pages/authentication/GetAdmin';
import Login from './pages/authentication/Login';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      <Routes>

        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route
          path="/"
          element={
            user
              ? <Navigate to={user.role === 'admin' ? '/getadmin' : '/getuser'} />
              : <GetAuth />
          }
        />

        <Route
          path="/getuser"
          element={user ? <GetUser user={user} /> : <Navigate to="/login" />}
        />

        <Route
          path="/getadmin"
          element={
            user && user.role === 'admin'
              ? <GetAdmin user={user} />
              : <Navigate to="/getuser" />
          }
        />

      </Routes>
    </Router>
  );
};

export default App;