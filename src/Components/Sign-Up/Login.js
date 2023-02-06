import React, { useState,useEffect } from 'react';
import { Link  } from 'react-router-dom';
import './style.css';
//import users from '../../UserData.json';
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';

function Login() {

  const { isAuthenticated, setToken ,setUserId,setIsAuthenticated,setUser} = useAuthContext();
  
  const [errorMessages, setErrorMessages] = useState(false);
  const [logEmail,setLogEmail]=useState();
  const [logPassword,setLogPassword]=useState();
  const [loggedUser,setLoggedUser]=useState();

   const showErrorMessages =(message) =>{
    return (<div className="error"><h5>{message}</h5></div>);
   
    // alert(message.message)
   }

  //handle submit
  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
    const { data } = await axios.post('https://real-red-gosling-hose.cyclic.app/user/login',{
    //  const { data } = await axios.post('http://localhost:3100/user/login',{
        email:logEmail,
        password:logPassword
      } );
 
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId',data.userid);
      setToken(data.token);
      setUserId(data.userid);
      setUser(data.user);
      setIsAuthenticated(true);
  
      console.log("Success",data);
    }catch(err){
      console.log("inside err message ",err.response)
      if(err.response.status === 400){
        setErrorMessages(true);
          }
      console.log(err);
    }
   
    // Find user login info
   // const userinfo = users.find((user) => user.userName === uname.value);

    // // Compare user info
    // if (userinfo) {
    //   if (userinfo.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };


    
    // JSX code for login form
    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor='uname'>Email </label>
              <input type="text" id='uname' name="uname" onChange={(e)=>{setLogEmail(e.target.value)}} required />
              {/* {renderErrorMessage("error")} */}
            </div>
            <div className="input-container">
              <label htmlFor='password'>Password </label>
              <input id='password' type="password" name="pass" onChange={(e)=>{setLogPassword(e.target.value)}} required />
              {errorMessages && showErrorMessages("Invalid Username or Password !")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
            <div>
                <p  className="not-member-container">    
                     Don't have an account?{" "}
                    <Link
                       to='/sign-up'
                    >
                        Sign up
                    </Link>
                </p>
            </div>
          </form>
        </div>
      );


  return (
    <div className="app">
    <div className="login-form">
      <div className="titleLogin">Sign In</div>
      {isAuthenticated ? <Navigate to="/" replace={true}/> : renderForm}
    </div>
  </div>
  )
}

export default Login
