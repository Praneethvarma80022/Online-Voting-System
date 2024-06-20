import React from 'react';
import './About.css';

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  const introElements = document.querySelectorAll('.intro, .intro1, .intro3, .content-text');

  introElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Initial check in case some elements are already in the viewport on page load
window.addEventListener('load', handleScrollAnimations);

function About() {
  return (
    <div>
      <div>
        <h1 className="about">About us</h1>
      </div>
      <div>
        <table>
          <tr>
            <td colSpan={2}>
              <h1 className='intro'>Introduction</h1>
            </td>
          </tr>
          <tr>
            <td className='col-lg-12 '>
              <p className='content-text1'>"Welcome to VoteForChange – your trusted online voting platform. Experience secure, convenient, and transparent elections from the comfort of your home."</p>
              <p className='content-text1'>VoteForChange is a mobile-based voting platform that allows you to create and manage your election. VoteForChange is much more than a platform - it's a revolution. VoteForChange is what mobile banking is to cash transactions, VoteForChange is what WhatsApp is to the postal department, VoteForChange is what mobile share trading is to paper shares trading.</p>
              <p className='content-text1'>If you have to choose between spending Rs. 30,000 Crores, 2 months, and 1 Crore man-days to manage an election with a 66% voter turnout Vs spending less than 10% cost, 10% time, and 10% effort and still managing 10 times better security and close to 100% voter turnout - what would you choose?</p>
            </td>
            <td>
              <img
                src="https://img.freepik.com/free-vector/election-referendum-campaign_74855-6386.jpg?w=1060&t=st=1695365460~exp=1695366060~hmac=2d09608f92e1b7ddf96120e7a254bca69f408c0abc6dbb351286fd122b5eca54"
                alt="Image"
                className="custom-image1"
              />
            </td>
          </tr>
        </table>
      </div>
      <hr />
      <div>
        <table className="section">
          <tbody>
            <tr>
              <td className="intro1" colSpan={5}>
                <h3>Logic behind the name - VoteForChange</h3>
              </td>
            </tr>
            <tr>
              <td className="custom-image2 smaller-image" colSpan={1}>
                <img className="img-responsive" src="https://dymk4s89vutua.cloudfront.net/wp-content/plugins/r2v-api/images/soldier.jpg?x21786" alt="Soldier" />
              </td>
              <td className="custom-image3 smaller-image" colSpan={1}>
                <img className="img-responsive" src="https://dymk4s89vutua.cloudfront.net/wp-content/plugins/r2v-api/images/nri.jpg?x21786" alt="NRI" />
              </td>
              <td className="col-lg-6" colSpan={3}>
                <p className="content-text">
                VoteForChange is a fight to ensure each and every citizen of the country gets his VoteForChange. And VoteForChange is not limited to just the political election but each and every election be it housing society election, club election, professional body election, or the national election. Nobody should be denied his VoteForChange due to his geographical location, his work commitments, his health issues, weather, etc.
                </p>
                <p className="content-text">
                VoteForChange is a mission to empower stakeholders and ensure that they get their Right to Vote.
                </p>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <table>
          <tr>
            <td colSpan={2}>
              <h1 className='intro3'>Logic Behind The Logo Design</h1>
            </td>
          </tr>
          <tr>
            <td className='col-lg-12'>
              <p className='content-text'><strong>The Letter V:</strong> V stands for Voting.The golden color of letter V denotes that each vote is precious.</p>
              <p className='content-text'><strong>The fingerprint:</strong> The fingerprint denotes biometric based 100% accurate voter verification. The red color stands for “Stop”. No voter would be allowed to vote without proper verification. This ensures no impersonation, duplicate voting, false voting or any other malpractice generally association with elections. The fingerprint in the logo also hints towards Aadhaar - the biometric based unique ID system of India that has potential to clean up lot of identity based malpractices in this country.</p>
              <p className='content-text'><strong>For Change: </strong> "For Change" suggests that voting is a means to bring about change. It indicates that through the act of voting, individuals can express their desire for improvements, reforms, or shifts in policies, leadership, or societal issues. It signifies a call for positive transformation.</p>
            </td>
            <td>
              <img
                src='./image/1.png'
                alt=""
                className="custom-image1"
              />
            </td>
          </tr>
        </table>
      </div>
      <hr />
      <div>
        <table>
          <tr>
            <td colSpan={2}>
              <h1 className='intro3'>The Mission</h1>
            </td>
          </tr>
          <tr>
            <td className='col-lg-12'>
              <p className='content-text'>To ensure that VoteForChange's mobile voting platform is used during the 2024 Indian Lok Sabha election to provide Right to Vote to all citizens of India including soldiers, NRIs, migrants and other sections who are denied Right to Vote due to booth based voting.</p>
            </td>
          </tr>
        </table>
      </div>
      <hr />
      <div>
        <table>
          <tr>
            <td colSpan={2}>
              <h1 className='intro3'>Our Focus</h1>
            </td>
          </tr>
          <tr>
            <td className='focu'>
              <p className='content-text'>We are a VOTING focused platform. We are not a market survey tool like Survey Monkey or opinion poll tool like poll daddy. Hence, we are also very focused on SECURITY and AUTHENICATION, unlike market survey or polling platforms where these are not major concern area.</p>
              <p className='content-text'>We are a INDIA focused company. We would first like to make meaningful difference in our country before venturing abroad.</p>
              <p className='content-text'>We are an ETHICS focused organization and would not take short cuts.</p>
              <p className='content-text'>We are an EFFICIENCY focused organization. We believe internet allows us to do most activity in much most cost, time and effort efficient way and its foolish to ignore efficiency.</p>
              <p className='content-text'>We are a CUSTOMER focused organization and both voter and election manager are our customer. We are focused on ensuring that every voter gets his Right2Vote and his experience of voting is very easy and efficient in terms of cost, time and effort required. We are also focused that election holding process for the election manager should be very easy and efficient.</p>
              <p className='content-text'>We are a PROFIT focused business which focuses on bottom-line rather than the topline. We do not understand the current way of doing business where companies worth billions of dollars, to survive, need to beg in front of investors every year. Many people mistake us for a charitable organization, which is not true. Our aim is to do remarkable service to the society but at the same time, we do not want to risk our survival by not focusing on profit.</p>
            </td>
          </tr>
        </table>
      </div>
    <footer className="footer">
        <div className="container-fluid r2v-footer px-5 py-5">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12 col-12 section1">
              <div className="row footermenu">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <h6 className='siz'>About us</h6>
                <a href="https://right2vote.in/about-right2vote" className="si">About Us</a>
                <a href="https://right2vote.in/in-the-media" className="si">In The Media</a>
                <a href="https://right2vote.in/awards-and-recognition" className="si">Award & Recognition</a>
                <a href="https://right2vote.in/about-right2vote/#meet_the_team" className="si">Management Team</a>
                <a href="https://right2vote.in/incubation/" className="si">Incubation</a>
                <a href="https://right2vote.in/our-customers/" className="si">Our Customers</a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <h6 className='siz'>Service</h6>
                <a href="https://right2vote.in/evoting/" className="si">eVoting</a>
                <a href="https://right2vote.in/online-auction/" className="si">eAuction</a>
                <a href="https://right2vote.in/eagm/" className="si">eAGM</a>
                <a href="https://right2vote.in/edataroom/" className="si">eDataRoom</a>
                <a href="https://right2vote.in/about-right2vote/time2justice/" className="si">Time2Justice</a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <h6 className='siz'>Legal</h6>
                <a href="https://right2vote.in/policies/privacy-policy/" className="si">Privacy Policy</a>
                <a href="https://right2vote.in/terms-of-service/" className="si">Terms of Service</a>
                <a href="https://right2vote.in/policies" className="si">Other Policies</a>
                <a href="https://right2vote.in/security-certificates/" className="si">Certificates</a>
                <a href="https://right2vote.in/notifications/" className="si">Notifications</a>
                <a href="https://right2vote.in/app-permissions/" className="si">App Permission</a>              
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <h6 className='siz'>Others</h6>
                <a href="https://right2vote.in/video/" className="si">Videos</a>
                <a href="https://right2vote.in/blog/" className="si">Blog</a>
                <a href="https://right2vote.in/case-studies/" className="si">Case Studies</a>
                <a href="https://right2vote.in/help/" className="si">Help</a>
                <a href="https://right2vote.in/feedback/" className="si">Feedback</a>
                <a href="https://right2vote.in/sitemap/" className="si">Sitemap</a>
                <a href="https://right2vote.in/archives/" className="si">Archives</a>
                </div>
              </div>
            </div>
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
        </div>
      </footer>
    </div>
  
  );
}

export default About;
