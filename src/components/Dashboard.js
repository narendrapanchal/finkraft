import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  
  const userData = sessionStorage.getItem('user');
  const user = JSON.parse(userData);
  let navigate = useNavigate();
  if (user?.role !== 'admin') {
    // If the user is not an admin, redirect to the login page
    window.location = '/login';
    return null; // Prevent rendering the dashboard content
  }else{
    console.log("stay on dashboard")
  }
  return (
    <div>
      <h1>Welcome, {user?.role}!</h1>
      {/* Show appropriate components and modules based on user role and active module. */}
    </div>
  );
};

export default Dashboard;
