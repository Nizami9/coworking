import "./Home.css"
import "./MonumentExtended-FreeForPersonal/MonumentExtended-Regular.otf";
import { NavLink } from "react-router-dom";
import CS from "./ImagesHome/customerService.png";
import calendar from "./ImagesHome/calendar.png"
import spaces from "./ImagesHome/spaces.png";
import user from "./ImagesHome/user.png";
import adress from "./ImagesHome/pin_drop.png";
import { useState,useEffect  } from "react";
import axios from 'axios';
//import useSpaceContext from '../../../context/SpaceContext'

const Home = () => {

  const [noResult,setNoResult]=useState(false);
  const [users,setUsers]=useState([]);
  const [searchKey,setSearchKey]=useState([]);
  const [availaleSpaces,setAvaialableSpaces]=useState([])

   const getAllUsers = async () =>{
    const { data } = await axios.get('https://real-red-gosling-hose.cyclic.app/spaces');
    setUsers(data);
   }


  useEffect(()=>{
   // getAllUsers();
    //console.log("users --",users);
},[]);

const handleChange =(e) =>{
  setSearchKey(e.target.value.toLowerCase());
}

const handleSearch = async(e) => {
  //e.preventDefault();
   console.log(searchKey);
   const { data } = await axios.post(`https://real-red-gosling-hose.cyclic.app/spaces/location`,{
    searchKey:searchKey.toLowerCase()
  })
  setAvaialableSpaces(data);
   console.log("data from  ",data)
}

  return ( 
    <div className="containerMain">
      <div className="leftContainerMain">
        <h1>Find your perfect workspace</h1>
        <p>From a single desk to a whole building <br/>The choice is yours</p>
        <div className="leftContInputs">
          <div className="locationInput">
            <img className="adressIcon" src={adress}></img>
            <input type='text' placeholder="Hamburg" onChange={handleChange}></input>
          </div>
          <div className="selectDateOffice">
          <input type='date' id="dateOption"></input>
          <select id="selectOfficeType" name="officelist">
                <option value="placeholderOption" disabled selected hidden>Office Space</option>
                <option value="f1">Booking</option>
                <option value="f2">Rent Working Space</option>
                <option value="f3">Contact With Us</option>
                <option value="f4">Complaint</option>
              </select>
          </div>
          
         <NavLink to='/locations/${searchKey}' className='searchButtonMain'><button className="buttonSearchMain" onClick={handleSearch}><p>Search</p></button></NavLink>

        </div>
        {/* <div>
              { noResult && <div>No Result</div>}
        </div> */}
      </div>
      <div  className="rightContainerMain"></div>
      <div className="bottomContainer">
        <div className="mobileVersion">
          <h2>What we offer</h2>
          <p>Choosing our coworking - you get access to a variety of services and discounts... </p>
          <div className="mobileContainers">
            <img src={CS}></img>
            <h3>Talk to an expert</h3>
            <p>Speak to one of ourspecialists 24/7</p>
          </div>
          <div className="mobileContainers">
          <img src={calendar}></img>
            <h3>Book workspace</h3>
            <p>Book meeting rooms and day offices now </p>
          </div>
          <div className="mobileContainers">
          <img src={spaces}></img>
            <h3>Set up a virtual office</h3>
            <p>Start building a real presence today</p>
          </div>
          <div className="mobileContainers">
          <img src={user}></img>
            <h3>Buy a membership</h3>
            <p>Access thousands of locations on demand</p>
          </div>
        </div>
        <div className="bottomContainerLeft">
        <h1>Book a unique space for your activity</h1>
        <p>From a single desk to a whole building <br/>The choice is yours</p>
        </div>
        <div className="bottomContainerRight">
          <div className="citesOptionPictures">
          <NavLink to="/locations" className='pic1'
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : '#ffffff',
            textDecoration: isActive ? 'none' : 'none',
          })}>
              <p>Hamburg</p>
          </NavLink>
          <div className="pic24">
          <NavLink to="/locations"
          className='pic2'
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : '#ffffff',
            textDecoration: isActive ? 'none' : 'none',
          })}>
              <p>Munich</p>
          </NavLink>
          <NavLink to="/locations" className='pic4'
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : '#ffffff',
            textDecoration: isActive ? 'none' : 'none',
          })}>
              <p>Frankfurt</p>
          </NavLink>
          </div>
          <NavLink to="/locations" className='pic3'
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : '#ffffff',
            textDecoration: isActive ? 'none' : 'none',
          })}>
              <p>Hannover</p>
          </NavLink>
          <NavLink to="/locations" className='pic5'
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : '#ffffff',
            textDecoration: isActive ? 'none' : 'none',
          })}>
              <p>Berlin</p>
          </NavLink>
          <NavLink to="/locations" className='pic6'
          style={({ isActive }) => ({
            color: isActive ? '#ffffff' : '#ffffff',
            textDecoration: isActive ? 'none' : 'none',
          })}>
              <p>Leipzig</p>
          </NavLink>
          </div>
        </div>
      </div>
    </div>   
   
  );
};

export default Home;