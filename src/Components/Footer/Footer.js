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
            <p>Copyright © 2022 Companies  All rights reserved</p>
        </div>
        <div className='rightContainer'>
            <h3>Contact Us</h3>
            <form>

            </form>
        </div>
    </div>
  )
}

export default Footer
