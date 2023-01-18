import React,{useState} from 'react';
import './styleChangePass.css';
import axios from 'axios';

function ChangePassword() {
  const backEnd_API = process.env.REACT_APP_API_BACKEND;
 
  const userId = localStorage.getItem('userId');
  const[input,setInput]=useState({
    currentPassword:'',
    newPassword:'',
    verifyPassword:''
  });
  

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(input.newPassword === input.verifyPassword){
        try {
           const { data } = await axios.post(`${backEnd_API}/user/change-password`,{
         //  const { data } = await axios.post('http://localhost:3100/user/change-password',{
               newPassword:input.newPassword,
               userId:userId
           } );
   
         console.log("Success",data);
         alert("Password changed succesfully !");
         }catch(err){
           console.log(err);
         }
    }
    else alert("Password doesn't match !")
  }

  return (
    <div className='p10-grid'>
        <div className='p10-pic-col'>
            <img  src={require('../../icons/profile-icon.png')}/>
            <h3>name</h3>
        </div>
        <div className='p10-profile-col'>
            <h2>My profile</h2>
            <h3>Change Password</h3>
            <form onSubmit={handleSubmit}>
            <div className='p10-form'>
                <div className='changePass'>
                <label htmlFor='currentPass'>Current Password</label>
                <input type='password'  id='currentPass' className='currentPass' name='currentPassword' onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor='newPass'>New Password</label>
                <input type='password' id='newPass' className='newPass' name='newPassword' onChange={handleChange}/>
                <p>The password must be 8-20 characters, and must not contain spaces</p>
                </div>
                <div>
                <label htmlFor='verify'>Verify</label>
                <input type='password' id='verify' className='verify' name='verifyPassword' onChange={handleChange}/>
                <p>To confirm, type the new password again.</p>
                </div>
                <button>Save</button>
            </div>
            </form>
        </div>
      
    </div>
  )
}

export default ChangePassword
