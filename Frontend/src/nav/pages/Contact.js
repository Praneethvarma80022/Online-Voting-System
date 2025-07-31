import React from 'react';
import '../css/Contact.css';

function Contact() {
  
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
              <p style={{color: '#666', fontSize: '1rem', marginTop: '-1rem'}}>Have an issue or question? Fill out the form below to get in touch.</p>
            </div>
            <form
              autoComplete="off"
              id="contact_form"
              className="row5 contact_form"
              action="https://formsubmit.co/praneethvarma144@gmail.com"
              method="POST"
            >
              <div className="col-lg-6 col-sm-12">
                <label htmlFor="person_name">Name *</label>
                <input
                  type="text"
                  name="name"
                  id="person_name"
                  required
                  placeholder="Your Name"
                  maxLength="50"
                />
              </div>
              <div className="col-lg-6 col-sm-12">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email Address"
                  maxLength="50"
                />
              </div>
              <div className="col-lg-12 col-sm-12">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="What is this about?"
                  maxLength="160"
                />
              </div>
              <div className="col-lg-12 col-sm-12">
                <label htmlFor="message_txt">Message *</label>
                <textarea
                  name="message"
                  id="message_txt"
                  rows="5"
                  maxLength="5000"
                  required
                  placeholder="Please describe your issue..."
                ></textarea>
              </div>
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_captcha" value="false" />
              <div className="col-lg-12 col-sm-12 text-center">
                <input
                  type="submit"
                  className="btn btn-themered"
                  value="Submit Issue"
                  
                />
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
    </div>
  );
}

export default Contact;
