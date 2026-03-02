import React, { useEffect, useState } from 'react';
import Logout from './Logout'; // Import Logout component

const GetAdmin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
      <h3>Admin Details</h3>
      {user ? (
        <ul>
          <li><strong>ID:</strong> {user.id}</li>
          <li><strong>First Name:</strong> {user.firstName}</li>
          <li><strong>Last Name:</strong> {user.lastName}</li>
          <li><strong>Date of Birth:</strong> {user.dob}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Gender:</strong> {user.gender}</li>
          <li><strong>Role:</strong> {user.role}</li>
          <li><strong>Occupation:</strong> {user.occupation}</li>
          <li><strong>Address:</strong> {user.address}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      {/* Logout button for admin */}
      <Logout />
    </div>
  );
};

export default GetAdmin;