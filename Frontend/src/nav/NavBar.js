import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook
import "./navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  // Get auth state and functions from the context
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onLogoutClick = () => {
    logout(); // Call logout from context
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); 
  };

  return (
    <nav className="main-nav">
      <div className="logo desktop-logo">
        <Link to="/" onClick={handleLinkClick}>
          <h2><span>V</span>ote<span className="for">F</span>or<span>C</span>hange</h2>
        </Link>
      </div>
      
      <div className="search-bar desktop-search-bar">
        <input type="text" placeholder="Search" />
        <button><FaSearch /></button>
      </div>

      <div className={isMobileMenuOpen ? "menu-link mobile-active" : "menu-link"}>
        <div className="logo mobile-logo">
            <Link to="/" onClick={handleLinkClick}>
              <h2><span>V</span>ote<span className="for">F</span>or<span>C</span>hange</h2>
            </Link>
        </div>

        <ul>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/About" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/Service" onClick={handleLinkClick}>Features</Link></li>
          <li><Link to="/Contact" onClick={handleLinkClick}>Contact Us</Link></li>
          
          {/* Use isAuthenticated and user.role from context */}
          {isAuthenticated && user?.role === 'user' && (
            <li><Link to="/Voting" onClick={handleLinkClick}>Voting</Link></li>
          )}
          {isAuthenticated && user?.role === 'admin' && (
            <li><Link to="/Onlinevoting" onClick={handleLinkClick}>Create Poll</Link></li>
          )}
          
          <li>
            {isAuthenticated ? (
              <button onClick={onLogoutClick} className="logout-button">Logout</button>
            ) : (
              <Link to="/Login" className="login-button" onClick={handleLinkClick}>Login</Link>
            )}
          </li>
        </ul>

        <div className="search-bar mobile-search-bar">
            <input type="text" placeholder="Search" />
            <button><FaSearch /></button>
        </div>
      </div>

      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
