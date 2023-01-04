import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import './profileStyle.css'

import ImageUploader from './ImageUploader';





function Profile() {
    <script src="https://unpkg.com/react-phone-input-2@2.x/dist/lib.js"></script>
    const [phoneNumber, setPhoneNumber] = useState();
    const [imgUrl, setImgUrl] = useState(require('../../icons/profile-icon.png'));




    const profileComponent = (
        <div className='main-grid'>
            <div className='pic-col'>
                <div className='profile-pic-div'>
                            {<ImageUploader />}
                           <h5>hello me</h5>
                </div>
                <div className='profile-list'>
                    <ul>
                        <li>Profile <span> {'>'}</span></li><hr />
                        <li>Favourite spaces <span> {'>'}</span></li><hr />
                        <li>Messages <span> {'>'}</span></li><hr />
                        <li>Billing <span> {'>'}</span></li><hr />
                    </ul>
                </div>
            </div>
            <div className='my-profile-col'>
                <h2>My Profile</h2>
                <h5>General information</h5>
                <div className='name-flex'>
                    <div className='flex-col'>
                        <label htmlFor='fname'>First name </label>
                        <input type='text' placeholder='First name' />
                    </div>
                    <div className='flex-col'>
                        <label htmlFor='lname'>Last name </label>
                        <input type='text' placeholder='Last name' />
                    </div>
                </div>
                <div className='email-flex'>
                    <div className='flex-col'>
                        <label htmlFor='fname'>Email </label>
                        <input type='email' placeholder='Email' />
                    </div>
                    <div className='flex-col'>
                        <label htmlFor='fname'>Phone </label>
                        <ReactPhoneInput
                            className='phone-input'
                            country={'de'}
                            value={phoneNumber}
                            onChange={phone => setPhoneNumber(phone)}
                        />
                        {/* <input type='tel' placeholder='Phone' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" /> */}
                    </div>
                </div>
                <div className='address'><h5>Address</h5></div>
                <div className='address-flex'>
                    <div className='flex-col address-bar'>
                        <label htmlFor='fname'>Address </label>
                        <input type='text' placeholder='Address' />
                    </div>
                    <div className='flex-col number-input'>
                        <label htmlFor='fname'>Number </label>
                        <input type='text' placeholder='Number' />
                    </div>
                </div>
                <div className='city-flex'>
                    <div className='flex-col'>
                        <label htmlFor='fname'>City </label>
                        <input type='text' placeholder='City' />
                    </div>
                    <div className='flex-col'>
                        <label htmlFor='fname'>Country </label>
                        <input type='text' placeholder='Country' />
                    </div>
                    <div className='flex-col'>
                        <label htmlFor='fname'>ZIP </label>
                        <input type='text' placeholder='ZIP' />
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

