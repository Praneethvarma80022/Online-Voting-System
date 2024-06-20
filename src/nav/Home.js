import React from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  
  const handleStartForFreeClick = () => {
    navigate('/Login');
  };
  return (
    <div className='backgroundcolor'>
      <div>
              <img src='./image/3.png' className='image6' />
      </div>
      <br />
      <br />
 
      <div className="ct-inner-content">    
      <section id="section-2-243" className="ct-section">
        <div className="ct-section-inner-wrap">
          <div id="new_columns-3-243" className="ct-new-columns">
            <div id="div_block-4-243" className="ct-div-block">
              <h1 id="headline-5-243" className="ct-headline">
                Online Voting System
              </h1>
              <p id="text_block-6-243" className="ct-text-block">
                With VoteForChange online voting system, your organization members can cast their vote anywhere and anytime with secure internet voting
              </p>
              <div>
              <img src="https://electionbuddy.com/wp-content/uploads/2021/03/macbook-person.jpg" className='image1' />
              </div>
              <h2 id="headline-34-243" className="ct-headline">
                What is Online Voting for an Election?
              </h2>
              <div id="_rich_text-58-245" className="oxy-rich-text">
                <p>Online voting (also known as electronic voting, or e-voting) is the process of using an electronic method to cast, and then tabulate, votes in an election. In a nutshell, this is what VoteForChange does. VoteForChange will help you through the full election process, from notifying voters and collecting votes to calculating the results of the election.</p>
                <p>By contrast, before online voting, elections were conducted using paper to cast votes, and tallies were performed by hand. While non-online voting is still prevalent in today’s society, the automation of the most important (but arguably, the most tedious) parts of an election (i.e., the voting and tallying) is causing online voting to accumulate enormous popularity. <span>Using an internet voting site makes running an election simple and easy. Voters also enjoy participating in a remote election from any location.</span></p>
                <p>Online voting not only increases convenience for everyone involved, but it also helps protect elections from a major risk to their integrity — human error. Ballots can get lost, mistakes can be made while calculating results, and humans can be influenced to tamper with an election. <span>An internet voting system and other online tools can automate the election process to eliminate errors and add necessary security. </span>VoteForChange protects the online voting process by limiting changes to the election during the voting period, providing audit trails of the few changes that ARE allowed, displaying results that can be manually calculated to verify the computer calculation, and more. Every detail is verifiable, and your election integrity is maintained. There are no secrets with online voting in an VoteForChange election — except your voters’ voting choices, of course!</p>
                <figure className="articleimg left"></figure>
              </div>
              <h2 id="headline-62-264" className="ct-headline">
                Online Voting and Ballot Methods
              </h2>
              <div id="_rich_text-64-264" className="oxy-rich-text">
                <article className="article">
                  <div className="container width--narrow">
                    <p>Online voting can generally be conducted in two ways — remote online voting and on-site online voting. <span>Your internet voting depends on the options stipulated by your bylaws. </span>Your bylaws are always the first place to check when deciding if you need to run an on-site or remote online vote. In some cases, you may even be allowed to utilize both options!</p>
                  </div>
                </article>
                <figure className="articleimg left"></figure>
              </div>
              <h3 id="headline-87-276" className="ct-headline">
                Online Voting and Ballot Methods
              </h3>
              <div id="_rich_text-86-276" className="oxy-rich-text">
                <article className="article">
                  <div className="container width--narrow">
                    <p>Remote online voting is online voting performed remotely. This type of voting is a form of an absentee ballot and is becoming extremely popular, as it goes one step further than on-site voting does to increase convenience for the voters. Instead of having to go out and vote in-person, remote online voting allows a voter to cast their vote at any time, from anywhere. All a voter needs to vote is a notice containing their voting credentials, a device that can connect to the internet, and an internet connection!</p>
                    <p>Traditionally, the challenge with remote voting was inherently tied to the distribution method that had to be used: postal services. Since paper was the basis for the voting process, paper ballots had to be mailed to voters and then had to be mailed back for counting the results of the election. The issues with postal services are that postage is expensive, it takes time for ballots to be mailed out and mailed back, and information can be lost in the mail.</p>
                    <p>However, when using an online voting process for your remote election, none of the above issues are a risk! This is because:</p>
                    <ul>
                      <li>Emails don’t have a postage charge, so you save on postage.</li>
                      <li>They are sent instantly and don’t rely on human delivery, which is prone to errors.</li>
                      <li>Your voters don’t have to send anything back — they simply follow the instructions in the email and cast their vote, which saves time.</li>
                    </ul>
                    <p>Your voters will love how easy and simple it is to vote online!</p>
                  </div>
                </article>
                <figure className="articleimg left"></figure>
              </div>
              <h3 id="headline-90-276" className="ct-headline">
                On-Site Online Elections
              </h3>
              <div id="_rich_text-78-276" className="oxy-rich-text">
                <p>As the name implies, on-site voting is when an election is performed by a voter in person. This commonly occurs at annual general meetings and is also done during municipal, provincial/state, and federal elections.</p>
                <p>However, unlike municipal/provincial/state, and federal elections, on-site online voting does not require a paper ballot. And, unlike an AGM voting process (which may be performed in a more informal way, such as a show of hands), you still get to reap the benefits of a formal voting process when online voting is used — namely, election integrity and security.</p>
                <p>If budget is a major factor for your elections, online voting can help drastically reduce the costs of your on-site election. The obvious savings of online polls include those from not having to print paper ballots for your voters, but there are other savings as well. For example, paper ballots require manpower for distribution, collection, and tabulation, and those people must be paid for their work. <span>But with an internet voting vendor, none of those elements of the election will be necessary. </span>No physical space is required for ballot storage with online polling, and there aren’t any costly tabulation errors when a computer algorithm does the counting. Furthermore, if time is money (like the old saying goes), then you’ll save money on all the time saved from having VoteForChange do most of the legwork during the election.</p>
                <p>Another major theme with online voting for on-site elections is convenience. When a computer program performs tasks and responsibilities that conventionally needed to be completed by hand, this is known as automation, and it is through automation that convenience is achieved. It is extremely convenient to not have to manually distribute, collect, and tabulate ballots, on top of the financial impact of not having a human do these things. VoteForChange automates the majority of the voting process, so you can stay focused on more important things.</p>
              </div>
              <h3 id="headline-71-276" className="ct-headline">
                Holding an Online Election
              </h3>
              <div id="_rich_text-73-276" className="oxy-rich-text">
                <p><span>As we've discussed, there are several benefits to holding an online election. You can hold an online election for your organization using internet voting systems, such as VoteForChange. To host an election using VoteForChange, simply sign up for an account, enter your information, and select the type of vote or poll you would like to use for your election, and then send out voting credentials to each one of your voters.</span></p>
              </div>
              <h2 id="headline-76-276" className="ct-headline1">
                Try online voting now!
              </h2>
              <div id="text_block-77-276" className="ct-text-block">
                Create and test online voting in VoteForChange for free.
              </div>
              <div className='button-container'>
              <a id="link_button-9-240" className="ct-link-button start-free-btn free-trial-ballot-types" onClick={handleStartForFreeClick}>
                Create Election Now
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}

export default Home;
