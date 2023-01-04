import React, { useState } from 'react';
import MyProfileLeftSide from '../../MyProfileLeftSide/MyProfileLeftSide';
import "./SignUp.css";
import ProfileImage from "../../MyProfileLeftSide/ProfileImages/Ellipse.png";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
    render() {
  return (
    <div className='signUpSection'>
      <div className='signUpRightSide'>
        <h1>My profile</h1>        
        <img src={ProfileImage}></img>
        <h3 className='signUpRightSideH3'>General information</h3>
        <form>
          <div className='GIinput'>
              <label>First name</label>
              <input placeholder='John' className='inputGI'></input>
              <label>Last name</label>
              <input placeholder='Smith' className='inputGI'></input>
              <label>Email</label>
              <input placeholder='John Smith@gmail.com' className='inputGI'></input>
              <label>Phone number</label>
              <input placeholder='+44 4356 5678' className='inputGI'></input>

          {/* <h3 className='signUpRightSideH3'>Address</h3> */}
          <label>Address</label>
          <input placeholder='Avonmore Road' className='inputGI'></input>
          <label>City</label>
          <input placeholder='London' className='inputGI'></input>
          <label>Country</label>
          <input placeholder='Great Britain' className='inputGI'></input>
          <label>ZIP</label>
          <input placeholder='256809' className='inputGI'></input>
          <label>Number</label>
          <PhoneInput
                className='PhoneInput'
                country={"de"}
                value={this.state.phone}
                onChange={(phone) => this.setState({ phone })}
              />
          </div>
          <button className='signUpButton'><p>Save All</p></button>
        </form>
      </div>
    </div>
  )
}
}