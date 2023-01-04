import React from 'react'
import MyProfileLeftSide from '../MyProfileLeftSide/MyProfileLeftSide';
import "./MyProfile.css";
import office1 from "./myProfileImages/Office1.png";
import office2 from "./myProfileImages/Office2.png";
import star from "./myProfileImages/Star.png";
import MapIcon from "./myProfileImages/MapIcon.png";
import Basket from "./myProfileImages/Basket.png"
const MyProfile = () => {
  return (
    <div className='MyProfilePage'>
      <MyProfileLeftSide className='leftSide'/>
      <div className='MyProfileRightSide'>
        <h1>My Profile</h1>
        <div className='MyProfileCard'>
            <div className='MyProfileCardImage'>
                <img src={office1}></img>
            </div>
            <div className='MyProfileCardInfo'>
                <h2 className='MyProfileCardTitle'>The Workers League - Blackheath</h2>
                <div className='MyProfileCardStars'>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                </div>
                <div className='MyProfileCardAdress'>
                    <img src={MapIcon}></img>
                    <p>44-50 Royal Parade Mews, London, United Kingdom </p>
                </div>
                <div className='MyProfileCardDetails'>
                    <p>Square <span>650m</span></p>
                    <p>Per day <span>22</span>$</p>
                    <img src={Basket}></img>
                </div>
            </div>
        </div>
        <div className='MyProfileCard'>
            <div className='MyProfileCardImage'>
                <img src={office2}></img>
            </div>
            <div className='MyProfileCardInfo'>
                <h2 className='MyProfileCardTitle'>Fitzrovia House</h2>
                <div className='MyProfileCardStars'>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                    <img src={star}></img>
                </div>
                <div className='MyProfileCardAdress'>
                    <img src={MapIcon}></img>
                    <p>16 Mortimer Street, London, United Kingdom</p>
                </div>
                <div className='MyProfileCardDetails'>
                    <p>Square <span>650m</span></p>
                    <p>Per day <span>22</span>$</p>
                    <img src={Basket}></img>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
