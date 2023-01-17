
import React from "react";
import logoImage from "../Footer/images/CoWo.png";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

import { useState } from 'react'
import { NavLink,Navigate,useNavigate  } from 'react-router-dom'
 import Hamburger from './Hamburger';
import './Navbar.css'



const Navbar = () => {

  const { user, setUser, setUserId, setIsAuthenticated, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

    const handleLogout =()=>{
      setIsAuthenticated(false);
      setUser(null);
      setUserId(null);
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      navigate("/");
      // <Navigate to='/' />
    }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to='/'><img src={logoImage}></img></NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
         <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/locations">Locations</NavLink>
            </li>
        {    isAuthenticated ? 
          <>
            <li>
              <NavLink to="/add-space"> Add Space</NavLink>
            </li>
            <li>
              <NavLink to="/profile"> Account</NavLink>
            </li>
            <li to="/" onClick={handleLogout} activeStyle={{ color: "black" }}>
                Log out
             </li>
             </> 
             :
             <>            <li>
              <NavLink to="/signin">  Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/sign-up">Sign Up</NavLink>
            </li>
            </>
 }

          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar