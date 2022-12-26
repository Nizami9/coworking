import React from 'react';
import ProfileImage from './ProfileImages/Ellipse.png';
import "./Myprofile.css";
import { NavLink } from "react-router-dom";
import Vector from "./ProfileImages/Vector.png"
const MyProfile = () => {
  return (
    <div>
        <div className='containerMyProfle'>
            <div className='containerMyProfleLeft'>
                <div className='myProfileImg'>
                    <img src={ProfileImage}></img>
                    <img></img>
                    <h2>John Smith</h2>
                </div>

                <div className='containerMyProfleMenu'>
                    <div className='menuOption'>
                        <NavLink to='#' className='MenuNavLink'
                        style={({ isActive }) => ({
                            textDecoration: isActive ? 'none' : 'none',
                          })}>Profile</NavLink>
                          <img src={Vector} className='VectorImgMenu'></img>
                    </div>
                    <hr/>
                    <div className='menuOption'>
                        <NavLink to='#' className='MenuNavLink'
                        style={({ isActive }) => ({
                            textDecoration: isActive ? 'none' : 'none',
                          })}>Favorite spaces</NavLink>
                            <img src={Vector} className='VectorImgMenu'></img>
                    </div>
                    <hr/>
                    <div className='menuOption'>
                        <NavLink to='#' className='MenuNavLink' style={({ isActive }) => ({
                            textDecoration: isActive ? 'none' : 'none',
                          })}>Messages</NavLink>
                            <img src={Vector} className='VectorImgMenu'></img>
                    </div>
                    <hr/>
                    <div className='menuOption'>
                        <NavLink to='#' className='MenuNavLink'
                        style={({ isActive }) => ({
                            textDecoration: isActive ? 'none' : 'none',
                          })}>Billing</NavLink>
                            <img src={Vector} className='VectorImgMenu'></img>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className='containerMyProfleRight'>

            </div>
        </div>
    </div>
  )
}

export default MyProfile
