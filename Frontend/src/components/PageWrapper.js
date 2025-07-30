import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';

// This component wraps each page and controls the loading spinner
const PageWrapper = ({ children }) => {
  const { setLoading } = useLoading();
  const { pathname } = useLocation();

  useEffect(() => {
    // Show the spinner immediately
    setLoading(true);

    // Hide the spinner after a short delay to ensure it's visible
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400); // 400 milliseconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [pathname, setLoading]); // Rerun this effect every time the page URL changes

  return children;
};

export default PageWrapper;