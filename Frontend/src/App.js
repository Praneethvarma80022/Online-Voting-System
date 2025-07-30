import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// --- Import Providers, Helpers, and new CSS ---
import { AuthProvider } from "./context/AuthContext";
import { LoadingProvider } from "./context/LoadingContext";
import PageWrapper from "./components/PageWrapper";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'; // Import the new layout CSS

// --- Lazily import all page components ---
const Navbar = lazy(() => import('./nav/NavBar'));
const Home = lazy(() => import('./nav/Home'));
const About = lazy(() => import('./nav/About'));
const Service = lazy(() => import('./nav/Service'));
const Onlinevoting = lazy(() => import('./nav/Onlinevoting'));
const Contact = lazy(() => import('./nav/Contact'));
const LogIn = lazy(() => import("./LogIn"));
const Voting = lazy(() => import("./nav/Voting"));
const Signup = lazy(() => import("./nav/signup"));
const Result = lazy(() => import("./nav/result"));
const Createdpoll = lazy(() => import("./nav/createdpoll"));
const Footer = lazy(() => import('./nav/fotter')); // Corrected footer import path

const App = () => {
  // This state will hold the poll data fetched from the backend
  const [pollData, setPollData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch poll data when the app loads
  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/poll');
        setPollData(res.data);
      } catch (err) {
        console.error("Failed to fetch poll data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPoll();
  }, []);

  // This function will be called from Voting.js to refresh data after a vote
  const refreshPollData = async () => {
     try {
        const res = await axios.get('http://localhost:5000/api/poll');
        setPollData(res.data);
      } catch (err) {
        console.error("Failed to refresh poll data:", err);
      }
  }

  // Display a loading message while fetching initial data
  if (loading) {
    return <div className="page-loader">Loading Poll Data...</div>;
  }

  return (
    <AuthProvider>
      <LoadingProvider>
        <Router>
          {/* This wrapper ensures the footer is pushed to the bottom */}
          <div className="app-container">
            <ScrollToTop />
            <Suspense fallback={<div className="page-loader">Loading Page...</div>}>
              <Navbar />
              {/* This wrapper allows the content to grow and fill space */}
              <main className="content-wrap">
                <Routes>
                  {/* --- Public Routes --- */}
                  <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                  <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                  <Route path="/service" element={<PageWrapper><Service /></PageWrapper>} />
                  <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                  <Route path="/login" element={<LogIn />} />
                  <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />

                  {/* --- Protected Routes for Logged-in Users --- */}
                  <Route path="/voting" element={
                    <ProtectedRoute>
                      <PageWrapper><Voting pollData={pollData} onVoteSuccess={refreshPollData} /></PageWrapper>
                    </ProtectedRoute>
                  } />
                  <Route path="/result" element={
                    <ProtectedRoute>
                      <PageWrapper><Result pollData={pollData} /></PageWrapper>
                    </ProtectedRoute>
                  } />

                  {/* --- Protected Routes for Admins Only --- */}
                  <Route path="/onlinevoting" element={
                    <ProtectedRoute role="admin">
                      <PageWrapper><Onlinevoting /></PageWrapper>
                    </ProtectedRoute>
                  } />
                  <Route path="/createdpoll" element={
                    <ProtectedRoute role="admin">
                      <PageWrapper><Createdpoll /></PageWrapper>
                    </ProtectedRoute>
                  } />
                </Routes>
              </main>
              <Footer /> {/* The footer is now here, outside the routes */}
            </Suspense>
          </div>
        </Router>
      </LoadingProvider>
    </AuthProvider>
  );
};

export default App;
