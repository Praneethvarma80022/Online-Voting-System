import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext(null);

// Create the provider component
export const AuthProvider = ({ children }) => {
  // Initialize state from localStorage to keep user logged in across page refreshes
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
  });

  // The login function that will be called from the LogIn component
  const login = (data) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    setAuth({
      token: data.token,
      user: data.user,
    });
  };

  // The logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuth({ token: null, user: null });
  };

  // The value provided to consuming components
  const value = {
    isAuthenticated: !!auth.token, // True if a token exists
    user: auth.user,
    token: auth.token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to easily consume the context in other components
export const useAuth = () => {
  return useContext(AuthContext);
};
