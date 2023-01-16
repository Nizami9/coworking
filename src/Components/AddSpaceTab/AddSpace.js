import React, { useState,useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom'
import ImageUploader from '../ProfilePage/ImageUploader';
import axios from 'axios';


function AddSpace() {
    const {userId,setUser,user } = useAuthContext();

    //const[phone,setPhone] =useState('');
    const [imageUrl, setImageUrl] = useState(require('../../icons/upload.png'));
    const [image, setImage] = useState(null);
    const [input, setInput] = useState({ title: '', area: '', costperDay: '', maxPeople: '', description: '', address: '', city: '', state: '', country: '', zip: '', })
    const backEnd_API = process.env.REACT_APP_API_BACKEND;

    const getUserDetails =async (userIdfromLS) =>{
         try {
            
            const { data } = await axios.post(`${backEnd_API}/user/get-user`,{
          //  const { data } = await axios.post('http://localhost:3100/user/get-user',{
                userId:userIdfromLS
            } );
           setUser(data)
          // console.log("Success",data);
          }catch(err){
            console.log(err);
          }
    }

     useEffect(()=>{
       // console.log("use context",userId,setUser,user)
        let userIdfromLS=localStorage.getItem('userId');
         userIdfromLS && getUserDetails(userIdfromLS);
     },[])

const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
    const handleUpload = async () => {

		// Get your Cloudinary configuration
		const cloudinaryUrl = process.env.REACT_APP_CloudinaryUrl;                           
		const cloudinaryPreset = process.env.REACT_APP_CloudinaryPresent;          

		// Prepare the form data for the request
		let formData = new FormData();
		formData.append('file', image);
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
    const handleSubmitAddSpace = async (e) => {
        try {
            e.preventDefault();
             const { data } = await axios.post(`${backEnd_API}/space`, {
           // const { data } = await axios.post('http://localhost:3100/spaces', {
                title: input.title,
                area: input.area,
                costperDay: input.costperDay,
                maxPeople: input.maxPeople,
                description: input.description,
                address: input.address,
                city: input.city,
                state: input.state,
                country: input.country,
                zip: input.zip,
                spacePicUrl: imageUrl,
                ownerName:user.firstName,
                ownerEmail:user.email,
                ownerPhone:user.phonenumber
            });

            console.log("space added successfully. ", data);
            return <Navigate to='/profile' />
        } catch (err) {
            console.log(err);
        }
    }

    return (

        <div className='signUpSection'>
            <div className='signUpRightSide'>
                <h1>Enter Space Details</h1>


                <form onSubmit={handleSubmitAddSpace}>
                    <div className='GIinput'>
                        <label>Title</label>
                        <input name='title' value={input.title} type='text' placeholder='title' className='inputGI' onChange={handleChange}></input>
                        <label>Area </label>
                        <input name='area' value={input.area} type='text' placeholder='area in sq meters' className='inputGI' onChange={handleChange}></input>
                        <label>Cost per Day</label>
                        <input name='costperDay' value={input.costperDay} type='number' placeholder='cost per day' className='inputGI' onChange={handleChange}></input>
                        <label>Maximum People</label>
                        <input name='maxPeople' value={input.maxPeople} placeholder='200' type='number' className='inputGI' onChange={handleChange}></input>
                        <label>Address</label>
                        <input name='address' value={input.address} type='text' placeholder='Avonmore Road' className='inputGI' onChange={handleChange}></input>
                        <label>City</label>
                        <input name='city' value={input.city} type='text' placeholder='Berlin' className='inputGI' onChange={handleChange}></input>
                        <label>State</label>
                        <input name='state' value={input.state} type='text' placeholder='Berlin' className='inputGI' onChange={handleChange}></input>
                        <label>Country</label>
                        <input name='country' value={input.country} type='text' placeholder='Germany' className='inputGI' onChange={handleChange}></input>
                        <label>ZIP</label>
                        <input name='zip' value={input.zip} placeholder='256809' className='inputGI' onChange={handleChange}></input>
                      <label>Description</label>
                            <input name='description' value={input.description} placeholder='Description ' className='inputGI' style={{height:'12em'}} onChange={handleChange}></input>
                        <label  >Upload Image</label>
                        <label className='img-upload-label' style={{height:'10em', background:'white',border:'none'}} >
                            {<ImageUploader image={image} setImage={setImage} imageUrl={imageUrl} setImageUrl={setImageUrl} />}
                           </label>
                           <img src={require('../../icons/upload-icon.webp')}  onClick={handleUpload} className='upload-icon-add-space'  />
      
                            </div>
                 
                    <button type='submit' className='signUpButton'><p>Save All</p></button>
                </form>
            </div>

        </div>
    )
}

export default AddSpace
