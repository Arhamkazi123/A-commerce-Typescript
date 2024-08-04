import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './checkauth'; // Adjust the import path

const ProtectedRoute: React.FC = () => {
  const authenticated = isAuthenticated();
  if(!authenticated){
    alert("You need to signin first")
  }
  // Redirect to login if not authenticated
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
