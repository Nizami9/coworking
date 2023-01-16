import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
 import Hamburger from './Hamburger';
// import menu from "../../Components/Navbar/menu.svg";

import logoImage from "../Footer/images/CoWo.png";
import './Navbar.css'

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img src={logoImage}></img>
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
              <NavLink to="/locations">locations</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Signin</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign up</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar