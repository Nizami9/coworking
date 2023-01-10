import React, { useState,useEffect } from 'react';
import { Link  } from 'react-router-dom';
import './style.css';
//import users from '../../UserData.json';
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';

function Login() {

  const { isAuthenticated, setToken } = useAuthContext();
  
  const [errorMessages, setErrorMessages] = useState({});
  //const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [logEmail,setLogEmail]=useState();
  const [logPassword,setLogPassword]=useState();
  const [loggedUser,setLoggedUser]=useState();
  
  
  //const [token,setToken] = useState();

  // const errors = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };
   
  //handle submit
  const handleSubmit = async(e) => {
   
    e.preventDefault();

    let { uname, pass } = document.forms[0];
    setLogEmail(uname.value);
    setLogPassword(pass.value);


    try {
      const { data } = await axios.post('http://localhost:3100/user/login',{
        email:logEmail,
        password:logPassword
      } );
      localStorage.setItem('token', data.token);
      setToken(data.token);
      //setIsAuthenticated(true);
      //setLoggedUser(JSON.parse(data))
      console.log("Success",data);
    }catch(err){
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
  
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    
    // JSX code for login form
    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor='uname'>Username </label>
              <input type="text" id='uname' name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label htmlFor='password'>Password </label>
              <input id='password' type="password" name="pass" required />
              {renderErrorMessage("pass")}
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

      // {
      //   console.log("data ----------",token)
      // }
    
  return (
    <div className="app">
    <div className="login-form">
      <div className="title">Sign In</div>
      {isAuthenticated ? <Navigate to="/" replace={true}/> : renderForm}
    </div>
  </div>
  )
}

export default Login
