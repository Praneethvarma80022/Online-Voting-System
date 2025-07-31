import React from 'react';
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  const handleStartForFreeClick = () => {
    navigate('/Login');
  };

  return (
    <div className='page-container'>
    
      <section className="hero-section">
        <img src="/image/3.png" alt="Abstract background with voting icons" className="hero-background-image" />
        <div className="hero-content">
          <h1 className="hero-title">
            Secure &amp; Simple
            <span className="hero-title-highlight">Online Voting</span>
          </h1>
          <p className="hero-subtitle">
            Empower your organization with a modern, reliable, and accessible voting platform.
          </p>
          <button onClick={handleStartForFreeClick} className="hero-button">
            Get Started Now
          </button>
        </div>
      </section>
      <section className="content-section">
        <div className="section-container">
          <h2 className="section-title">What is Online Voting?</h2>
          <div className="intro-card">
            <div className="text-content">
              <p>
                Online voting (or e-voting) is a secure and efficient way to conduct elections and polls using the internet. It replaces traditional paper ballots with an electronic system, allowing members to vote remotely from their computer or mobile device. This method increases convenience, boosts participation, and reduces the risk of human error, ensuring the integrity of every vote.
              </p>
            </div>
            <div className="image-content">
              <img src="https://electionbuddy.com/wp-content/uploads/2021/03/macbook-person.jpg" alt="A person using a laptop for online voting" />
            </div>
          </div>
        </div>
      </section>
      <section className="content-section" style={{backgroundColor: '#ffffff'}}>
        <div className="section-container">
          <h2 className="section-title">Key Features</h2>
          <p style={{textAlign: 'center', color: '#475569', maxWidth: '800px', margin: '0 auto'}}>
            Our platform offers a variety of features to meet your needs, including different ballot methods for on-site or remote elections, robust security protocols to protect voter privacy, and detailed audit trails for complete transparency.
          </p>
        </div>
      </section>
      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">Create and test your first election for free. No credit card required.</p>
          <button onClick={handleStartForFreeClick} className="cta-button">
            Create Election Now
          </button>
        </div>
      </section>

    
    </div>
  );
}

export default Home;
