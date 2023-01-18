import React, { useState } from 'react';
import './profileStyle.css'
import axios from 'axios';

function ImageUploader(props) {

	//const [image, setImage] = useState(null);
	//const [imageUrl, setImageUrl] = useState(null);

	const handleChange = (event) => {
		props.setImage(event.target.files[0]);
		props.setImageUrl(URL.createObjectURL(event.target.files[0]));
	};



//
	return (
		<div>
			<div> 

				<label htmlFor="file-input">
					<img src={props.imageUrl || require('../../icons/profile-icon.png')} className='profile-img' alt="Choose image" width='100' height='100' />
				</label>
			
				<input type="file" id="file-input" onChange={handleChange}  style={{ display: 'none' }} />
    
			</div>
		</div>
	)
}

export default ImageUploader

