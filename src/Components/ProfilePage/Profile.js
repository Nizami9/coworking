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
    const {user,setUser} =useAuthContext();

   
    const [imageUrl, setImageUrl] = useState();
    const [image, setImage] = useState(null);
    const[profileImgLink,setProfileImgLink]=useState(user.profilepicurl);

    const[userid,setUserid]=useState();
    const backEnd_API = process.env.REACT_APP_API_BACKEND;

    const [input,setInput]=useState({
        firstname:'',
        lastname:'',
        email:'',
        phonenumber:'',
        address:'',
        city:'',
        country:'',
        zip:''
})

//   const [input,setInput]=useState({
//     firstname:input.firstname,
//     lastname:input.lastname,
//     email:input.email,
//     phonenumber:input.phonenumber,
//     address:input.address,
//     city:input.city,
//     country:input.country,
//     zip:input.zip,

//   })
   useEffect(()=>{
        setProfileImgLink(imageUrl)
     console.log("inside ueeffect")
   },[imageUrl])

    const getUserDetails =async (LSUser) =>{
        try {
           const { data } = await axios.post(`${backEnd_API}/user/get-user`,{
           //const { data } = await axios.post('http://localhost:3100/user/get-user',{
               userId:LSUser
           } );
          setInput(data);
         setImageUrl(`${data.profilepicurl}`)
         console.log("Success",data);
         }catch(err){
           console.log(err);
         }
   }

    useEffect(()=>{
       let LSUser = localStorage.getItem('userId');
      LSUser && getUserDetails(LSUser);
      setUserid(LSUser);
    },[])


  const handleChange = (e) => {
    e.preventDefault();
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
        console.log(input);
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
			console.log("uploaded. ",response.status);
		} catch (error) {
			console.error(error);
		}
	};

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setUser(input);
        try {
             const { data } = await axios.post(`${backEnd_API}/user/update`,{
            //  const { data } = await axios.post('http://localhost:3100/user/update',{
                  user:input,
                  userId:userid,
                  profilepicurl:profileImgLink
              } );
              
              alert("Updated succesfully !")
            console.log("Success",data);
            }catch(err){
              console.log(err);
            }
    }
// ||require('../../icons/upload-icon.webp')        src={`${user.profilepicurl}`} 
    const profileComponent = (
        <div className='main-grid'>
                      <ScrollToTopOnMount />
            <div className='pic-col'>
                <div className='profile-pic-div'>
                            {<ImageUploader  image={image} setImage={setImage} imageUrl={imageUrl} setImageUrl={setImageUrl} />}
                            <img src={image}  onClick={handleUpload} className='upload-icon-profile'  />
                           <h5>{input.firstname}{" "}{input.lastname}</h5>
                </div>
                <div className='profile-list'>
                    <ul>
                        <li><Link to='/profile'> Profile <span> {'>'}</span></Link></li><hr />
                        {/* <li><Link to='/prev-bookings'>Previous bookings <span> {'>'}</span></Link></li><hr /> */}
                        {/* <li>Messages <span> {'>'}</span></li><hr /> */}
                        <li><Link to='/change-password'>Change password <span> {'>'}</span></Link></li><hr />
                    </ul>
                </div>
            </div>
            <div className='my-profile-col'>
                <h2>My Profile</h2>
                <h5>General information</h5>
                <form onSubmit={handleSubmit}>               
                     <div className='name-flex'>
                    <div className='flex-col'>
                        <label htmlFor='fname'>First name </label>

                        <input type='text' placeholder='First name' value={input.firstname} name='firstname' onChange={handleChange} />
                    </div>
                    <div className='flex-col'>
                        <label htmlFor='lname'>Last name </label>
                        <input type='text' placeholder='Last name' value={input.lastname} name='lastname'  onChange={handleChange} />

                    </div>
                </div>
                <div className='email-flex'>
                    <div className='flex-col'>
                        <label htmlFor='fname'>Email </label>

                        <input type='email' placeholder='Email'  value={input.email}  onChange={handleChange} />

                    </div>
                    <div className='flex-col'>
                        <label htmlFor='fname'>Phone </label>
                        <ReactPhoneInput
                            className='phone-input'
                            name='phone'
                            country={'de'}
                            value={input.phonenumber}
                            onChange={phone => setPhoneNumber(phone)}
                        />
                        {/* <input type='tel' placeholder='Phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /> */}
                    </div>
                </div>
                <div className='address'><h5>Address</h5></div>
                <div className='address-flex'>
                    <div className='flex-col address-bar'>
                        <label htmlFor='fname'>Address </label>

                        <input type='text' placeholder='Address'  value={input.address} name='address' onChange={handleChange}/>
                    </div> 
                    <div className='flex-col'>
                        <label htmlFor='fname'>City </label>
                        <input type='text' placeholder='City'  value={input.city} name='city' onChange={handleChange} />
                   

                    </div>
                    {/* <div className='flex-col number-input'>
                        <label htmlFor='fname'>Number </label>
                        <input type='text' placeholder='Number'  value={} />
                    </div> */}
                </div>
                <div className='city-flex'>
                    <div className='flex-col'>
                        <label htmlFor='fname'>Country </label>

                        <input type='text' placeholder='Country'  value={input.country} name='country' onChange={handleChange} />
                    </div>
                    <div className='flex-col'>
                        <label htmlFor='fname'>ZIP </label>
                        <input type='text' placeholder='ZIP'  value={input.zip} name='zip' onChange={handleChange} />

                    </div>
                </div>
                <div>
                <button className='profile-page-btn'>Save All</button>
                </div>
                </form>

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

