import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import '../css/result.css';

const Result = () => {
  const [pollData, setPollData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    const fetchResults = async () => {
      if (!token) {
        setError("Authentication token not found.");
        setIsLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/poll/results', {
          headers: {
            'x-auth-token': token,
          },
        });
        setPollData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'You do not have permission to view results.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [token]);

  if (isLoading) {
    return <div className="voting-container">Loading results...</div>;
  }

  if (error) {
    return <div className="error-container">{error}</div>;
  }

  if (!pollData) {
    return <div className="voting-container">No poll data available.</div>;
  }

  return (
    <div className="voting-container">
      <h2 className='ct-headline'>Result</h2>
      <div>
        <table className="voting-table">
          <thead>
            <tr>
              <th className="table-header">Title</th>
              <th className="table-header">Options</th>
              <th className="table-header">Images</th>
              <th className="table-header">No Of Votes</th>
            </tr>
          </thead>
          <tbody>
            {pollData.options.map((option) => (
              <tr key={option._id}>
                <td className="table-data">{pollData.title}</td>
                <td className="table-data">{option.name}</td>
                <td className="table-data">
                  <img src={`http://localhost:5000${option.image}`} alt={option.name} className="member-image" />
                </td>
                <td className='table-data'>{option.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Result;
