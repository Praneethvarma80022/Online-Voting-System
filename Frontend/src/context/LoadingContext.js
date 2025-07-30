import React from 'react';
import { createContext, useState, useContext } from 'react';
import LoadingSpinner from '../components/LoadingSpinner'; // Adjust path if needed

// 1. Create the context
const LoadingContext = createContext();

// 2. Create a "provider" component
export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      {loading && <LoadingSpinner />}
      {children}
    </LoadingContext.Provider>
  );
}

// 3. Create a custom hook to use the context easily
export function useLoading() {
  return useContext(LoadingContext);
}