import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [voter,setvoter] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [error, setError] = useState(null);

  async function submit(e) {
    e.preventDefault();

    // Simple email format validation using a regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }

    // Check if the name is not empty
    if (!name) {
      setError("Name is required.");
      return;
    }
   
    if (!voter) {
      setError("Voter ID is required.");
      return;
    } else {
      // Define the regular expression for the expected format (ABC0123456)
      const validFormat = /^([A-Z]{3}\d{7})$/;
    
      if (!validFormat.test(voter)) {
        setError("Invalid Voter ID format. It should be in ABC0123456 format.");
        return;
      }
    }
    
    // Check if the password and re-entered password match
    if (password !== reenterPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Reset any previous error
    setError(null);

    try {
      // Implement your signup logic here, e.g., make an API request to create an account
      // If successful, navigate the user to the dashboard or the desired route.
      navigate('/login'); 
    } catch (e) {
      setError("Error during signup");
      console.log(e);
    }
  }

  return (
<div>
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <form onSubmit={submit}>
      <div className="form-group">
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    id="name"
    placeholder="Enter the Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
</div>
<div className="form-group">
  <label htmlFor="name">Voter Id:</label>
  <input
    type="text"
    id="voter"
    placeholder="It should be in ABC0123456"
    value={voter}
    onChange={(e) => setvoter(e.target.value)}
  />
</div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter the Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter the Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reenterPassword">Re-enter Password:</label>
          <input
            type="password"
            id="reenterPassword"
            placeholder="Re-enter the Password"
            value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="ac">
          <button type="submit" className="signup-button"> Create Account</button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>

    </div>

<footer className="footer">
<div >

            <div className="col-lg-3 col-md-12 col-sm-12 col-12 section2">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 app-icons">
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 copy-info"> 
                  <h6 className='version'>Version: Coming Soon</h6>
                  <h6 className='last'>Available Soon </h6>
                  <h6 className="copyright">© Copyright 2026 VoteForChange. All Rights Reserved.</h6>
                </div>
              </div>
            </div>


 </div>

</footer>
</div>
  );
}

export default Signup;
