import React from 'react';
import './UserVoting.css';

function Result({ pollData }) {
  if (!pollData) {
    return <div className="voting-container">Loading results...</div>;
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
                  <img src={option.image} alt={option.name} className="member-image" />
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
