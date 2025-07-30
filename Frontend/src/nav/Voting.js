import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './UserVoting.css';

function Voting({ pollData, onVoteSuccess }) {
  const { user, token } = useAuth();
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [page, setPage] = useState('poll');
  const [error, setError] = useState('');

  // This effect checks the user's voting status when the component loads
  useEffect(() => {
    if (user?.hasVoted) {
      setPage('voted');
    }
  }, [user]); 

  const handleVote = async () => {
    if (!selectedOptionId) {
      setError('Please select an option to vote.');
      return;
    }
    setError('');

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
      
      const body = JSON.stringify({ optionId: selectedOptionId });
      await axios.post('http://localhost:5000/api/vote', body, config);
      
      setPage('success');
      onVoteSuccess();

    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while voting.');
    }
  };
  
  // Add a check for missing poll data at the top. This prevents the blank page.
  if (!pollData) {
    return <div className="voting-container">Loading poll...</div>;
  }

  if (page === 'voted') {
    return (
      <div className="voting-container">
        <h2 className="success-message">You have already cast your vote.</h2>
        <p className="success-message">Thank you for your participation!</p>
      </div>
    );
  }

  return (
    <div className="voting-container">
      {page === 'poll' && (
        <div>
          <h1 className="voting-title">{pollData.title}</h1>
          {error && <p className="error-message">{error}</p>}
          <table className="voting-table">
            <thead>
              <tr>
                <th className="table-header">Title</th>
                <th className="table-header">Options</th>
                <th className="table-header">Images</th>
                <th className="table-header">Description</th>
                <th className="table-header">Select</th>
              </tr>
            </thead>
            <tbody>
              {pollData.options.map((option) => (
                <tr key={option._id}>
                  <td className="table-data">{pollData.title}</td>
                  <td className="table-data">{option.name}</td>
                  <td className="table-data">
                    <img src={option.image} alt={option.name} className="member-image" />
                  </td>
                  <td className="table-data">{option.description}</td>
                  <td className="table-data">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="options"
                        value={option._id}
                        onChange={() => setSelectedOptionId(option._id)}
                      />
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="vote-button-container">
            <button className="vote-button" onClick={handleVote}>Vote</button>
          </div>
        </div>
      )}

      {page === 'success' && (
        <div>
          <h2 className="success-message">Thank you for your vote!</h2>
          <div className='than1'>
            <img src='./image/thanks.png' className='thank' alt="Thanks" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Voting;
