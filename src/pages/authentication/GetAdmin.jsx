import React from 'react';
import Logout from './Logout';

const GetAdmin = ({ user, setUser }) => {

  if (!user) {
    return <p>Error: No admin data found.</p>;
  }

  return (
    <div>
      <h3>Admin Details</h3>

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

      <Logout setUser={setUser} />
    </div>
  );
};

export default GetAdmin;