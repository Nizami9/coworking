import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'
import ImageUploader from '../ProfilePage/ImageUploader';
import axios from 'axios';


function AddSpace() {
    const { userId, setUser, user } = useAuthContext();
    const navigate = useNavigate();

    //const[phone,setPhone] =useState('');
    const [imageUrl, setImageUrl] = useState(require('../../icons/upload.png'));
    const [image, setImage] = useState(null);
    const [input, setInput] = useState({
        title: '',
        area: '',
        costperDay: '',
        maxPeople: '',
        description: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
    })
    const backEnd_API = process.env.REACT_APP_API_BACKEND;

    const getUserDetails = async (userIdfromLS) => {
        try {

            const { data } = await axios.post(`https://real-red-gosling-hose.cyclic.app/user/get-user`, {
                //const { data } = await axios.post('http://localhost:3100/user/get-user',{
                userId: userIdfromLS
            });
            setUser(data)
            // console.log("Success",data);
        } catch (err) {

            console.log(err);
        }
    }

    useEffect(() => {
        // console.log("use context",userId,setUser,user)
        let userIdfromLS = localStorage.getItem('userId');
        userIdfromLS && getUserDetails(userIdfromLS);
    }, [])

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

        formData.append('upload_preset', 'kbbluczr');

     //   formData.append('upload_preset', cloudinaryPreset);

        // Make the request to Cloudinary
        // try {
        //     const response = await axios.post(cloudinaryUrl, formData);

        //     if (response.data.secure_url.startsWith("blob:")) {
        //         let result = response.data.secure_url.slice(0,27);
        //         let finaleUrl = 'https://res.cloudinary.com/dc5lux2d9/image/upload/v1674060657/co-worker-profile-pics' + result
        //         setImageUrl(finaleUrl);
        //     }
        //     else
        //         setImageUrl(response.data.secure_url);



      //  setImageUrl(response.data.secure_url);



        //  https://res.cloudinary.com/dc5lux2d9/image/upload/v1674060657/co-worker-profile-pics/ot0lv6dcopqihod7qy0f.jpg

        //	blob:http://localhost:3000/2ad3e277-0a37-496e-be2c-1aceaea1f02f

        //https://res.cloudinary.com/dc5lux2d9/image/upload/v1674060657/co-worker-profile-pics


        // Make the request to Cloudinary
        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dc5lux2d9/upload', formData);
            console.log("before blob check")
            if ((response.data.secure_url).startsWith("b")) {
                console.log("inside blob check----------")
                let result = response.data.secure_url.slice(0, 27);
                console.log(result);
                let finaleUrl = 'https://res.cloudinary.com/dc5lux2d9/image/upload/v1674060657/co-worker-profile-pics' + result
                console.log("removing blobb  ",result,finaleUrl);
                setImageUrl(finaleUrl);
            }
            else {
                setImageUrl(response.data.secure_url);
              console.log("url is ",imageUrl)
            console.log("uploaded.", response.status);
            alert("Image uploaded !");
            }
        } catch (error) {
            console.error(error);
        }
    };
    const handleSubmitAddSpace = async (e) => {
        try {
            e.preventDefault();
            console.log(input);
            //  const { data } = await axios.post('http://localhost:3100/spaces', {
            const { data } = await axios.post(`https://real-red-gosling-hose.cyclic.app/spaces`, {

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
                ownerName: user.firstname,
                ownerEmail: user.email,
                ownerPhone: user.phonenumber
            });

            console.log("space added successfully. ", data);
            // navigate('/profile');
        } catch (err) {
            console.log(err);
        }
    }

        return (

            <div className='signUpSection'>
                <div className='signUpRightSide'>
                    <h1>Enter Space Details</h1>


                <form onSubmit={(e) => handleSubmitAddSpace(e)}>
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
                        <input name='description' value={input.description} placeholder='Description ' className='inputGI' style={{ height: '12em' }} onChange={handleChange}></input>
                        <label  >Upload Image</label>
                        <label className='img-upload-label' style={{ height: '10em', background: 'white', border: 'none' }} >
                            {<ImageUploader image={image} setImage={setImage} imageUrl={imageUrl} setImageUrl={setImageUrl} />}
                        </label>
                        <img src={imageUrl} onClick={handleUpload} className='upload-icon-add-space' />

                        </div>

                        <button type='submit' className='signUpButton'>Save All</button>
                    </form>
                </div>

            </div>
        )
    }

    export default AddSpace
