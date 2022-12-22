import React from 'react';
import "../Footer/Footer.css";
import logo from "./images/CoWo.png";
import facebook from "./images/FacebookIcon.png"
import instagram from "./images/InstaIcon.png"
import twitter from "./images/TwitterIcon.png"
import linkedin from "./images/LinkedinIcon.png"

const Footer = () => {
  return (
    <div className='containerFooter'>
        <div className='leftContainer'>
            <img className='footerLogo' src={logo} />
            <p>It starts with good people</p>
            <p>Become a part of our community</p>
            <div className='socialPagesFooter'>
                <a href='#'><img src={facebook}/></a>
                <a href='#'><img src={instagram}/></a>
                <a href='#'><img src={twitter}/></a>
                <a href='#'><img src={linkedin}/></a>
            </div>
            <p className='copyrightText'>Copyright © 2022 Companies  All rights reserved</p>
        </div>
        <div className='rightContainer'>
            <h3>Contact Us</h3>
            <form className='formFooter'>
              <input type='text' placeholder='John'/>
              <input type="tel" id="phone" name="phone" pattern="+[0-9]{2}-[0-9]{11}" placeholder='49-00000000000'/>
              <input type="email" id="email" name="email" placeholder='Example@gmail.com' />
              <select id="selectInterest" name="interestlist">
                <option value="placeholderOption" disabled selected hidden>I am interested in</option>
                <option value="booking">Booking</option>
                <option value="rentSpace">Rent Working Space</option>
                <option value="сontactWithUs">Contact With Us</option>
                <option value="complaint">Complaint</option>
              </select>
              <input type='text' id='yourText' placeholder='Your message'/>
              <div className='checkboxFooter'>
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label id='vehicle21' for="vehicle21">I have read and accepted the privacy policy</label>
              </div>
              <input type="submit" value="Submit" id='submitFooter'/>
            </form>
        </div>
    </div>
  )
}

export default Footer
