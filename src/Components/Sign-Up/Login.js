import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import './style.css';

function Login() {
      // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

   // User Login info
   const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
   
  //handle submit
  const handleSubmit = (e) => {
    //Prevent page reload
    e.preventDefault();

    let { uname, pass } = document.forms[0];




    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
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
    
  return (
    <div className="app">
    <div className="login-form">
      <div className="title">Sign In</div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  </div>
  )
}

export default Login
