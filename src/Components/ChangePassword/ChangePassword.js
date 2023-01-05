import React from 'react';
import './styleChangePass.css';

function ChangePassword() {
  return (
    <div className='p10-grid'>
        <div className='p10-pic-col'>
            <img  src={require('../../icons/profile-icon.png')}/>
            <h3>name</h3>
        </div>
        <div className='p10-profile-col'>
            <h2>My profile</h2>
            <h3>Change Password</h3>
            <div className='p10-form'>
                <div className='changePass'>
                <label htmlFor='currentPass'>Current Password</label>
                <input type='text'  id='currentPass' className='currentPass' />
                </div>
                <div>
                <label htmlFor='newPass'>New Password</label>
                <input type='text' id='newPass' className='newPass' />
                <p>The password must be 8-20 characters, and must not contain spaces</p>
                </div>
                <div>
                <label htmlFor='verify'>Verify</label>
                <input type='text' id='verify' className='verify' />
                <p>To confirm, type the new password again.</p>
                </div>
                <button>Save</button>
            </div>
        </div>
      
    </div>
  )
}

export default ChangePassword
