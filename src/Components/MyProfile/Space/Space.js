import React from 'react';
import Navbar from "../../Navbar/index";
import Footer from "../../Footer/Footer";
import Image1 from "./ImagesSpace/Image1.png";
import Image2 from "./ImagesSpace/Image2.png";
import Image3 from "./ImagesSpace/Image3.png";
import calendar from "./ImagesSpace/calendar.png";
import schedule from "./ImagesSpace/schedule.png";
import "./Space.css";

const Space = () => {
  return (
    <div className='containerSpace'>
        <div className='spaceImages'>
            <div className='leftImageSpace'>
                <img src={Image1}></img>
            </div>
            <div className='rightImageSpace'>
                <img src={Image2}></img>
                <img src={Image3}></img>
            </div>
        </div>
        <div className='spaceReservations'>
                <h1>Keyboards & Dreams Royal </h1>
                <span className='info'>Available 57 desks</span>
            <p className='spacePrice'>25$ / day</p>
            <p className='reserveOnlineP'>Reserve online</p>
            <button className='reserveSpaceButton'><p>Reserve space</p></button>
            <div className='hrOr'>
            <hr />
            <p>or</p>
            <hr />
            </div>
            <p>Visit this space in person following our new safety measures.</p>
            <button className='bookTourButton'><p>Book a Tour</p></button>
        </div>
        <div className='spaceImages'>
            <div className='openingHours'>
                <h3>Opening hours:</h3>
                <div className='dataInfo1'>
                    <img src={calendar}></img>
                    <p>Monday - Friday</p>
                </div>
                <div className='dataInfo2'>
                    <img src={schedule}></img>
                    <p>07:00 am - 23:00 pm</p>
                </div>
            </div>

        <div className='openingHours'>
                <h3>Description:</h3>
                <div className='descriptionText'>
                    <p>
                    WIRED magazine included our central London building in their ten "UK's best co-working spaces (that aren't WeWork)". And now we're at it again, brand new for 2021 - bringing the coolest, cosiest workplace to the Royal Docks, on a pedestrianised street alongside a coffee shop, a nursery, an ice cream factory and a gym.
                    5 minutes walk from "Royal Victoria" and "Canning Town" stations - similarly to our flagship space in Farringdon, we're providing the essentials at great affordable startup & freelancer friendly rates. We're in a new ultra-sustainable building, powered by 100% renewable energy with a focus on minimising our impact on the world.
                    </p>
                </div>
            </div>
</div>
        </div>
  )
}

export default Space
