
import React from "react";
import logoImage from "../Footer/images/CoWo.png";
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import Home from "../MainPage/Home/Home";
// import {
//   Nav,
//   NavLogo,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
//   DropdownList,
// } from "./NavbarElements";

import { useState } from 'react'
import { NavLink,Navigate,useNavigate  } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
 import Hamburger from './Hamburger';
// import menu from "../../Components/Navbar/menu.svg";

import './Navbar.css'

const Navbar = () => {

  const { user, setUser, setUserId, setIsAuthenticated, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const goMainPage = (e) => {
    console.log(e);
  }

    //  <NavMenu>
    //       <NavLink to="/" activeStyle={{ color: "black" }}>
    //         Home
    //       </NavLink>
    //       <NavLink to="/locations" activeStyle={{ color: "black" }}>
    //         Locations
    //       </NavLink>

    //       {
    //         isAuthenticated ? <>
    //         <NavLink to="/add-space" activeStyle={{ color: "black" }}>
    //         Add Space
    //       </NavLink>
    //           <NavLink to="/" onClick={handleLogout} activeStyle={{ color: "black" }}>
    //             Log out
    //           </NavLink>
    //           </>
    //           :
    //           <>
    //             <NavLink to="/signin" activeStyle={{ color: "black" }}>
    //               Sign In
    //             </NavLink>
    //             <NavBtn>
    //               <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
    //             </NavBtn>
    //           </>}  

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