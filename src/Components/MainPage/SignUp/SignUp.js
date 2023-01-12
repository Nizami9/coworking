import React, { useState } from 'react';
import MyProfileLeftSide from '../../MyProfileLeftSide/MyProfileLeftSide';
import "./SignUp.css";
import ProfileImage from "../../MyProfileLeftSide/ProfileImages/Ellipse.png";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import ImageUploader from '../../ProfilePage/ImageUploader';
import axios from 'axios';
import { useAuthContext } from '../../../context/AuthContext';
import {  Navigate } from 'react-router-dom';

export default function SignUp () {

  const { isAuthenticated, setToken ,setIsAuthenticated, setUserId} = useAuthContext();

  //const[token,setToken] = useState();
  const[phone,setPhone] =useState('');
  const [input, setInput] = useState({firstName: '', lastName: '', email: '', password: '', address: '', city: '', country: '', zip: ''}) 


  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
 // console.log(input.firstName, input.lastName,phone)
  const handleSubmitRegistration = async (e)=>{
    try{
        e.preventDefault();
      const { data } = await axios.post('https://real-red-gosling-hose.cyclic.app/user/register', {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          password: input.password,
          phone: phone,
          address: input.address,
          city: input.city,
          country: input.country,
          zip: input.zip
      });
      localStorage.setItem('token', data.token);
      setToken(data.token);
     // setUserId(data.userId)
      setIsAuthenticated(true);
      console.log("registration success. ",data);
      return <Navigate to='/' />
    }catch(err){
        console.log(err);
    }
  }

if(isAuthenticated) return <Navigate to='/' />
else
  return (
    <div className='signUpSection'>
      <div className='signUpRightSide'>
        <h1>My profile</h1>        
        {<ImageUploader />}
        <h3 className='signUpRightSideH3'>General information</h3>
        <form onSubmit={handleSubmitRegistration}>
          <div className='GIinput'>
              <label>First name</label>
              <input name='firstName' value={input.firstName} type='text' placeholder='John' className='inputGI'  onChange={handleChange}></input>
              <label>Last name</label>
              <input  name='lastName' value={input.lastName}  type='text' placeholder='Smith' className='inputGI' onChange={handleChange}></input>
              <label>Email</label>
              <input   name='email' value={input.email} type='text' placeholder='John Smith@gmail.com' className='inputGI'  onChange={handleChange}></input>
              <label>Password</label>
              <input  name='password' value={input.password} type='password' className='inputGI'  onChange={handleChange}></input>
              <div className='phoneNumberField'>
              <label className='phoneNumber'></label>
              <PhoneInput
                className='PhoneInput'
                defaultCountry="DE"
                name='phone'
                value={phone}
                onChange={value => setPhone(value)}
              />
              </div>
          <label>Address</label>
          <input   name='address' value={input.address} type='text' placeholder='Avonmore Road' className='inputGI' onChange={handleChange}></input>
          <label>City</label>
          <input name='city' value={input.city}   type='text' placeholder='London' className='inputGI' onChange={handleChange}></input>
          <label>Country</label>
          <input   name='country' value={input.country} type='text' placeholder='Great Britain' className='inputGI'  onChange={handleChange}></input>
          <label>ZIP</label>
          <input name='zip' value={input.zip} placeholder='256809' className='inputGI' onChange={handleChange}></input>
          </div>
          <button type='submit' className='signUpButton'><p>Save All</p></button>
        </form>
      </div>
    </div>
  )
}
