import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// This component wraps around routes that require authentication
// It can also check for a specific role if one is provided
const ProtectedRoute = ({ children, role }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // 1. Check if the user is authenticated
  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them back there after they log in.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 2. If a role is required, check if the user has that role
  if (role && user?.role !== role) {
    // If the user is logged in but doesn't have the required role,
    // redirect them to their default page based on their role.
    const defaultPath = user?.role === 'admin' ? '/onlinevoting' : '/voting';
    return <Navigate to={defaultPath} replace />;
  }

  // 3. If everything is fine, render the child component
  return children;
};

export default ProtectedRoute;
