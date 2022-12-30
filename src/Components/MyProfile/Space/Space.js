import React from 'react';
import Navbar from "../../Navbar/index";
import Footer from "../../Footer/Footer";
import Image1 from "./ImagesSpace/Image1.png";
import Image2 from "./ImagesSpace/Image2.png";
import Image3 from "./ImagesSpace/Image3.png";
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
                <p>Available 57 desks</p>
            <p className='spacePrice'>25$ / day</p>
            <p>Reserve online</p>
            <button><p className='reserveSpaceP'>Reserve space</p></button>
            <p></p>
            <p>Visit this space in person following our new safety measures.</p>
            <button></button>
        </div>

    </div>
  )
}

export default Space
