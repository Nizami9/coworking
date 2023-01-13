import React, { useState } from 'react';
import './profileStyle.css'
import axios from 'axios';

function ImageUploader() {

	const [image, setImage] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);

	const handleChange = (event) => {
		setImage(event.target.files[0]);
		setImageUrl(URL.createObjectURL(event.target.files[0]));
	};

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


	return (
		<div>
			<div>

				<label htmlFor="file-input">
					<img src={imageUrl || require('../../icons/profile-icon.png')}  className='profile-img' alt="Choose image" width='100' height='100' />
				</label>
				<img src={require('../../icons/upload-icon.webp')}  onClick={handleUpload} className='upload-icon'  />
				<input type="file" id="file-input" onChange={handleChange}  style={{ display: 'none' }} />
    
			</div>
		</div>
	)
}

export default ImageUploader

