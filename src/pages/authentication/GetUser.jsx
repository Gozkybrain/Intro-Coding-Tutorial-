import React, { useEffect, useState } from 'react';
import Logout from './Logout'; // Import Logout component

const GetUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser); // Set user from localStorage
    }
    setLoading(false); // Stop loading once user data is fetched
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading message
  }

  if (!user) {
    return <p>Error: No user data found.</p>; // Show error if no user data
  }

  return (
    <div>
      <h3>User Details</h3>
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
      <Logout /> {/* Logout button */}
    </div>
  );
};

export default GetUser;