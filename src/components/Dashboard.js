import React from 'react';
const Dashboard = ({onLogout}) => {
  
  const userData = sessionStorage.getItem('user');
  const user = JSON.parse(userData);
  if (user?.role !== 'admin') {
    // If the user is not an admin, redirect to the login page
    console.log("user",user)
    window.location = '/login';
    return null; // Prevent rendering the dashboard content
  }else{
    console.log("stay on dashboard")
  }
  return (
    <div>
      <h1>Welcome, {user?.role}!</h1>
      {/* Show appropriate components and modules based on user role and active module. */}
      <button onClick={()=>{
        onLogout()
      }}>Logout</button>
    </div>
  );
};

export default Dashboard;
