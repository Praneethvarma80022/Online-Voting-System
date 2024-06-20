import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  // Define state to store the input value
  const [inputValue, setInputValue] = useState('');

  // Define the event handler function for input changes
  const handleInputChange = (event) => {
    // Update the state with the new input value
    setInputValue(event.target.value);
  };

  return (
    <div className="container-fluid contactus-container">
      <div className="row2">
        <div className="col-lg-12 col-12 heading">
          <h1 className='headi'>Contact us</h1>
          <div className='ce'>
          <label><strong>Contact Number :</strong></label>
          <a className="red" href="tel:+917207266106"><strong>+91 7207266106</strong></a>
          <label><strong>Email :</strong></label>
          <a className="red" href="mailto:contact@VoteForChange.in"><strong>Contact@VoteForChange.in</strong></a>
          </div>
        </div>
        <div className="col-lg-12 ">
          <div className="section2">
            <div className='eng'>
            <h1>Enquiry for Service</h1>
            </div>
            <form autoComplete="off" id="contact_form" className="row5 contact_form pad0" action="" method="post">
              <div className="col-lg-6 col-sm-12">
                <label>Service looking for :</label>
                <select id="selectService">
                  <option value="">Select Service</option>
                  <option value="eVoting" selected>Voting</option>
                  <option value="eAuction">Auction</option>
                  <option value="eDataroom">Dataroom</option>
                  <option value="eAGM">AGM</option>
                </select>
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="">Event date</label>
                <div id="startdate" className="input-group date" style={{ display: 'block !important' }}>
                  <input
                    type="date"
                    data-display-name="Poll start date"
                    id="req_date"
                    name="req_date"
                    placeholder="dd/mm/yyyy"
                    value={inputValue} // Bind the input value to the state
                    data-date-format="dd/mm/yyyy"
                    required="required"
                    className="form-control marb0"
                    onInput={handleInputChange} // Use the defined event handler
                  />
                  <span className="input-group-addon fixed" id="startdate_btn">
                    <i className="fas fa-calendar-alt"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 eVoting box5">
                <label className="org">Select Organization type</label>
                <select className="" id="organization">
                  <option value="">Select Organization type</option>
                  <option value="Association">Association</option>
                  <option value="Housing Society">Housing Society</option>
                  <option value="College">College</option>
                  <option value="Club">Club</option>
                  <option value="Cooperative">Cooperative</option>
                  <option value="Company">Company</option>
                  <option value="eVoting for IBC">eVoting for IBC</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="col-lg-6 col-sm-12 eVoting box5">
                <label className="">Number of Voters *</label>
                <input type="text" name="no_of_voter" id="no_of_voter" className="eVoting box5" placeholder="Number of Voters" maxLength="20" onInvalid="this.setCustomValidity('Please enter number of voters')" onInput="setCustomValidity('')" />
                <span id="voter_num_errmsg"></span>
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="">Name *</label>
                <input type="text" name="person_name" id="person_name" className="charAccept" required placeholder="Name *" maxLength="50" value="praneeth varma" readOnly onInvalid="this.setCustomValidity('Please enter your name')" onInput="setCustomValidity('')" /><span id="name_errmsg"></span>
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="">Contact Number *</label>
                <input type="text" name="contact_num" id="contact_num" required placeholder="Contact Number *" maxLength="20" value="" onInvalid="this.setCustomValidity('Please enter your contact number')" onInput="setCustomValidity('')" /><span id="contact_errmsg"></span>
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="">Email *</label>
                <input type="email" id="email" name="email" className="enquiry_cl" required placeholder="Email *" maxLength="50" value="praneethv54@gmail.com" readOnly onInvalid="this.setCustomValidity('Please enter your email id')" onInput="setCustomValidity('')" /><span id="email_errmsg"></span>
              </div>
              <div className="col-lg-6 col-sm-12">
                <label className="">Subject</label>
                <input type="text" name="subject" id="subject" required placeholder="Subject *" maxLength="160" onInvalid="this.setCustomValidity('Please enter subject')" onInput="setCustomValidity('')" />
              </div>
              <div className="col-lg-12 col-sm-12">
                <label className="">Message *</label>
                <textarea name="message" id="message_txt" className="" rows="3" maxLength="5000" required placeholder="Message *" style={{ marginBottom: '10px' }} onInvalid="this.setCustomValidity('Please enter message')" onInput="setCustomValidity('')"></textarea>
              </div>
              <div className="col-lg-12 col-sm-12 text-center">
                <input type="submit" className="btn btn-themered bw1" id="contact_form_submit" name="contact_us_btn" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 sectio1">
          <div className="xhighlightdiv">
            <label>Contact Number :</label>
            <a className="red" href="tel:+7207266106"><strong>+91 7207266106</strong></a><br />
            <label>Email :</label>
            <a className="red" href="mailto:contact@VoteForChange.in"><strong>Contact@VoteForChange.in</strong></a>
          </div>
        </div>
        <div className="col-lg-6 sectio1">
          <div className='xhighlightdiv'>
            <label>Address :</label>
            <span>VoteForChange KL-tech 
              <br /> KL University, Vaddeswaram, Gutur,
              <br /> Andhra Pradesh - 522303</span>
          </div>
        </div>
        <div className="col-lg-6 sectio1">
          <div className='xhighlightdiv'>
            <label>Important company identification numbers :</label><br />
            <span>Udyog Aadhaar / MSME number: Not Avaliable</span><br />
            <span>GST number - Not Avaliable</span><br />
            <span>PAN Number - Not Avaliable</span><br />
            <span>Certificate of Incorporation Number - Still not Avaliable</span><br />
            <span>Department of Industrial Promotion and Policy Certificate No.: Not Avaliable</span>
          </div>
        </div>
        <div className="col-lg-6 sectio1">
          <div className='xhighlightdiv'>
            <label>Contact details of the Director :</label><br />
            <span>Name: M Praneeth Varma</span><br />
            <a className="" href="tel:+917207266106">+91 7207266106</a><br />
            <span>Email: <a href="mailto:praneethv54@right2vote.in">praneethv54@right2vote.in</a></span>
          </div>
        </div>
        <div className="col-lg-6 sectio1">
          <div className='xhighlightdiv'>
            <label>Contact details of the Website Information Manager :</label><br />
            <span>Name: Bhasakar</span><br />
            <a className="" href="tel:+919030220342">+91 9030220342</a><br />
            <span>Email: <a href="mailto:saurabh@right2vote.in">Bhasakar@right2vote.in</a></span>
          </div>
        </div>
        <div className="col-lg-6 sectio1">
          <div className='xhighlightdiv'>
            <label>Contact details of the Website Helper:</label><br />
            <span>Name: V Roopa Bhanu</span><br />
            <a className="" href="tel:+918169498883">+91 9494102504</a><br />
            <span>Email: <a href="mailto:ajay@right2vote.in">roopa@right2vote.in</a></span>
          </div>
        </div>
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

export default Contact;
