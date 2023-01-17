import React from 'react';
import "../Footer/Footer.css";
import logo from "./images/CoWo.png";
import facebook from "./images/FacebookIcon.png"
import instagram from "./images/InstaIcon.png"
import twitter from "./images/TwitterIcon.png"
import linkedin from "./images/LinkedinIcon.png"
import { useState } from 'react';
import axios from 'axios';

const Footer = () => {
 
  const [contact, setContact] = useState({
    fullname: '',
    email: '',
    phone:'',
    interestlist: ''

   
  });

  const handleChange = (e) => {
    e.preventDefault();
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
    console.log(contact)

  }

  const handleSubmit = async (e) => {
   alert("Thank you for booking with us")
    console.log(contact)
    try {
      const { data } = await axios.post('https://real-red-gosling-hose.cyclic.app/contact-us',{
        contactInfo:contact
       
      } );
 
     
  
      console.log("Success",data);
    }catch(err){
      console.log(err);
    }
  }
 
  return (
    <div className='containerFooter'>
        <div className='leftContainerFooter'>
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
        <div className='rightContainerFooter'>
            <h3>Contact Us</h3>
            <form className='formFooter' onSubmit={handleSubmit}>
              <input className='footerNameForm'onChange={handleChange} name='fullname' type='text' placeholder='John'/>
              <input type="tel" id="phone" onChange={handleChange}  name="phone" pattern="+[0-9]{2}-[0-9]{11}" placeholder='49-00000000000'/>
              <input type="email" id="email" onChange={handleChange}  name="email" placeholder='Example@gmail.com' />
              <select id="selectInterest" onChange={handleChange}  name="interestlist">
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
