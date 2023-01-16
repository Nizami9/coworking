import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import './profileStyle.css'
import ScrollToTopOnMount from '../../ScrollToTopOnMount';
import ImageUploader from './ImageUploader';
import axios from 'axios';

import { useAuthContext } from '../../context/AuthContext';



function Profile() {
    <script src="https://unpkg.com/react-phone-input-2@2.x/dist/lib.js"></script>
    const [phoneNumber, setPhoneNumber] = useState();
   
    const [imageUrl, setImageUrl] = useState(null);
    const [image, setImage] = useState(null);

    const[userid,setUserid]=useState();
    const backEnd_API = process.env.REACT_APP_API_BACKEND;

     
  const [user,setUser]=useState({
    firstname:'',
    lastname:'',
    email:'',
    phonenumber:'',
    address:'',
    city:'',
    country:'',
    zip:''
  })


    const getUserDetails =async (LSUser) =>{
        try {

           const { data } = await axios.post(`${backEnd_API}/user/get-user`,{
           //const { data } = await axios.post('http://localhost:3100/user/get-user',{
               userId:LSUser
           } );
          setUser(data)
         console.log("Success",data);
         }catch(err){
           console.log(err);
         }
   }

    useEffect(()=>{
       let LSUser = localStorage.getItem('userId');
       LSUser && getUserDetails(LSUser);
       setUserid(LSUser);
        console.log(LSUser);
    },[])

  const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value

        });
      }


    const handleUpload = async () => {

		// Get your Cloudinary configuration
		const cloudinaryUrl = process.env.REACT_APP_CloudinaryUrl;                           
		const cloudinaryPreset = process.env.REACT_APP_CloudinaryPresent;          

		// Prepare the form data for the request
		let formData = new FormData();
		formData.append('file',image);
		formData.append('upload_preset', cloudinaryPreset);

		// Make the request to Cloudinary
		try {
			const response = await axios.post(cloudinaryUrl, formData);
			setImageUrl(response.data.secure_url);
			console.log("uploaded.",response.status);
		} catch (error) {
			console.error(error);
		}
	};



    const profileComponent = (
        <div className='main-grid'>
                      <ScrollToTopOnMount />
            <div className='pic-col'>
                <div className='profile-pic-div'>
                            {<ImageUploader  image={image} setImage={setImage} imageUrl={imageUrl} setImageUrl={setImageUrl} />}
                            <img src={require('../../icons/upload-icon.webp')}  onClick={handleUpload} className='upload-icon-profile'  />
                           <h5>hello me</h5>
                </div>
                <div className='profile-list'>
                    <ul>
                        <li><Link to='/change-password'> Profile <span> {'>'}</span></Link></li><hr />
                        <li><Link>Favourite spaces <span> {'>'}</span></Link></li><hr />
                        {/* <li>Messages <span> {'>'}</span></li><hr /> */}
                        <li><Link to='/change-password'>Change password <span> {'>'}</span></Link></li><hr />
                    </ul>
                </div>
            </div>
            <div className='my-profile-col'>
                <h2>My Profile</h2>
                <h5>General information</h5>
                <div className='name-flex'>
                    <div className='flex-col'>
                        <label htmlFor='fname'>First name </label>
                        <input type='text' placeholder='First name' value={user.firstname} onChange={handleChange} />
                    </div>
                    <div className='flex-col'>
                        <label htmlFor='lname'>Last name </label>
                        <input type='text' placeholder='Last name' value={user.lastname}/>
                    </div>
                </div>
                <div className='email-flex'>
                    <div className='flex-col'>
                        <label htmlFor='fname'>Email </label>
                        <input type='email' placeholder='Email'  value={user.email}/>
                    </div>
                    <div className='flex-col'>
                        <label htmlFor='fname'>Phone </label>
                        <ReactPhoneInput
                            className='phone-input'
                            country={'de'}
                            value={user.phonenumber}
                            onChange={phone => setPhoneNumber(phone)}
                        />
                        {/* <input type='tel' placeholder='Phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /> */}
                    </div>
                </div>
                <div className='address'><h5>Address</h5></div>
                <div className='address-flex'>
                    <div className='flex-col address-bar'>
                        <label htmlFor='fname'>Address </label>
                        <input type='text' placeholder='Address'  value={user.address} />
                    </div> 
                    <div className='flex-col'>
                        <label htmlFor='fname'>City </label>
                        <input type='text' placeholder='City'  value={user.city}/>
                    </div>
                    {/* <div className='flex-col number-input'>
                        <label htmlFor='fname'>Number </label>
                        <input type='text' placeholder='Number'  value={} />
                    </div> */}
                </div>
                <div className='city-flex'>
                    <div className='flex-col'>
                        <label htmlFor='fname'>Country </label>
                        <input type='text' placeholder='Country'  value={user.country} />
                    </div>
                    <div className='flex-col'>
                        <label htmlFor='fname'>ZIP </label>
                        <input type='text' placeholder='ZIP'  value={user.zip} />
                    </div>
                </div>
                <button>Save All</button>
            </div>
        </div>
    )

    return (
        <div>
            {profileComponent}
        </div>
    )
}

export default Profile

