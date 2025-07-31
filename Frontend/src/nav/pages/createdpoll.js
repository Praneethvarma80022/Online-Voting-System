import React, { useState } from 'react';
import '../css/UserVoting.css';

function Createdpoll() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [page, setPage] = useState('poll');

  const handleMemberSelect = (selectedMember) => {
    setSelectedMember(selectedMember);
  }

  const handleVote = () => {
    if (selectedMember) {
      setPage('success');
    }
  }

  const members = [
    {
      name: "AP ELECTIONS",
      image: "./image/TDP.png",
      options: "TDP",
      description: "Telugu Desam Party - A regional political party in Andhra Pradesh and Telangana, advocating for regional development and governance.",
    },
    {
      name: "AP ELECTIONS",
      image: "./image/JSP.png",
      options: "JSP",
      description: "Jana Sena Party - Founded by actor Pawan Kalyan, it focuses on social and political issues in Andhra Pradesh.",
    },
    {
      name: "AP ELECTIONS",
      image: "./image/YSRCP.png",
      options: "YSRCP",
      description: "Yuvajana Sramika Rythu Congress Party - A regional party in Andhra Pradesh, led by Y. S. Jagan Mohan Reddy.",
    },
    {
      name: "AP ELECTIONS",
      image: "./image/CONGRESS.png",
      options: "CONGRESS PARTY",
      description: "Indian National Congress - One of India's oldest political parties, with a rich history and diverse representation.",
    },
  ];

  return (
    <div className="voting-container">
      <h2 className='ct-headline'>Created A Voting</h2>
      {page === 'poll' && (
        
        <div>
          <table className="voting-table">
            <thead>
              <tr>
                <th className="table-header">Title</th>
                <th className="table-header">Options</th>
                <th className="table-header">Images</th>
                <th className="table-header">Description</th>
                
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td className="table-data">{member.name}</td>
                  <td className="table-data">{member.options}</td>
                  <td className="table-data">
                    <img src={member.image} alt={member.name} className="member-image" />
                  </td>
                  <td className="table-data">{member.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}

export default Createdpoll;
