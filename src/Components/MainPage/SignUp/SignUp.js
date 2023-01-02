import React from 'react';
import MyProfileLeftSide from '../../MyProfileLeftSide/MyProfileLeftSide';
import "./SignUp.css";
import ProfileImage from "../../MyProfileLeftSide/ProfileImages/Ellipse.png";

const SignUp = () => {
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
          <label>Number</label>
          <input placeholder='29' className='inputGI'></input>
          <label>City</label>
          <input placeholder='London' className='inputGI'></input>
          <label>Country</label>
          <input placeholder='Great Britain' className='inputGI'></input>
          <label>ZIP</label>
          <input placeholder='256809' className='inputGI'></input>
          </div>
          <button className='signUpButton'><p>Save All</p></button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
