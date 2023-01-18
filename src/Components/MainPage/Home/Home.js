import "./Home.css"
import "./MonumentExtended-FreeForPersonal/MonumentExtended-Regular.otf";
import { NavLink, Link, useNavigate } from "react-router-dom";
import CS from "./ImagesHome/customerService.png";
import calendar from "./ImagesHome/calendar.png"
import spaces from "./ImagesHome/spaces.png";
import user from "./ImagesHome/user.png";
import adress from "./ImagesHome/pin_drop.png";
import { useState,useEffect  } from "react";
import axios from 'axios';
import ScrollToTopOnMount from "../../../ScrollToTopOnMount"; 
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Home = () => {

  const [noResult,setNoResult]=useState(false);
  const [users,setUsers]=useState([]);
  const [searchKey,setSearchKey]=useState([]);
  const [availaleSpaces,setAvaialableSpaces]=useState([]);
  const [clickedCity, setClickedCity] = useState();
  // const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
  const REACT_APP_API_BACKEND=process.env.REACT_APP_API_BACKEND;
  
  const navigate = useNavigate();

   const getAllUsers = async () =>{
    const { data } = await axios.get(`${REACT_APP_API_BACKEND}/spaces`);
    setUsers(data);
   }

  useEffect(()=>{
    getMap();
   // getAllUsers();
    //console.log("users --",users);
},[]);

const handleChange =(e) =>{
  setSearchKey(e.target.value.toLowerCase());
}

const handleChangeCity = (e) =>{
  navigate(`/locations/${e.target.textContent.toLowerCase()}`)
  // setClickedCity(e.target.textContent);
  console.log(e.target.textContent);
}

const showCityOptions = (e) => {
  navigate(`/locations/${e.target.toLowerCase()}`)
  console.log(e.target);

}


const handleSearch = async(e) => {
  //e.preventDefault();
   console.log(searchKey);
   const { data } = await axios.post(`${REACT_APP_API_BACKEND}/spaces/location`,{
    searchKey:searchKey.toLowerCase()
  })
  setAvaialableSpaces(data);
   console.log("data from  ",data)
}

const getMap = () => {
mapboxgl.accessToken = 'pk.eyJ1Ijoibml6YW1pOSIsImEiOiJjbGN5bGpxNG8yZWFrM3Btc2J2Nzh1dWtkIn0.E5GcEsGSmR-HoYW_nRKACA';
      const map = new mapboxgl.Map({
    container: 'mainMap',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [9, 51], // starting position
    zoom: 4.0 // starting zoom
  });
  map.addControl(new mapboxgl.NavigationControl());
  const MarkerHamburg = new mapboxgl.Marker()
  .setLngLat([9.993682, 53.551086])
  .addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
  const MarkerBerlin = new mapboxgl.Marker()
  .setLngLat([13.381777, 52.531677])
  .addTo(map);

  const MarkerFrankfurt = new mapboxgl.Marker()
  .setLngLat([8.682127, 50.110924])
  .addTo(map);

  const MarkerMunchen = new mapboxgl.Marker()
  .setLngLat([11.576124, 48.137154])
  .addTo(map);

  const MarkerLeipzig = new mapboxgl.Marker()
  .setLngLat([12.360103, 51.340199])
  .addTo(map);

  const MarkerStuttgart = new mapboxgl.Marker()
  .setLngLat([9.190182, 48.755749])
  .addTo(map);

  const MarkerHannover = new mapboxgl.Marker()
  .setLngLat([9.735603, 52.373920])
  .addTo(map);

  const MarkerDusseldorf = new mapboxgl.Marker()
  .setLngLat([6.783333, 51.233334])
  .addTo(map);

  const MarkerDortmund = new mapboxgl.Marker()
  .setLngLat([7.468429, 51.514244])
  .addTo(map);
  
  const marker = new mapboxgl.Marker({
    color: '#F84C4C' // color it red
    });
     
    // Define the animation.
    function animateMarker(timeSt) {
    const radius = 20;
    marker.setLngLat([
    Math.cos(timeSt/1000) * radius,
    Math.sin(timeSt/1000) * radius
    ]);
    
    marker.addTo(map);
     
    requestAnimationFrame(animateMarker);
    }
    requestAnimationFrame(animateMarker);
}
  return (  
    <div className="containerMain">
                <ScrollToTopOnMount />
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
          
         <NavLink to={`/locations/${searchKey}`} className='searchButtonMain'><button className="buttonSearchMain" onClick={handleSearch}><p>Search</p></button></NavLink>

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
        <div>
          <ul className="bottomContainerLeftUL">
            <li onClick={handleChangeCity}>Berlin</li>
            <li onClick={handleChangeCity}>Hamburg</li>
            <li onClick={handleChangeCity}>Munich</li>
            <li onClick={handleChangeCity}>Köln</li>
            <li onClick={handleChangeCity}>Frankfurt</li>
            <li onClick={handleChangeCity}>Stuttgart</li>
            <li onClick={handleChangeCity}>Düsseldorf</li>
            <li onClick={handleChangeCity}>Leipzig</li>
            <li onClick={handleChangeCity}>Dortmund</li>
            <li onClick={handleChangeCity}>Essen</li>
            <li onClick={handleChangeCity}>Hannover</li>
          </ul>
        </div>
        </div>
        <div className="bottomContainerRight">
          <div className="citesOptionPictures">
          <div onClick={handleChangeCity} className='pic1'>
              <p>Hamburg</p>
          </div>
          <div className="pic24">
          <div onClick={handleChangeCity} className='pic2'>
              <p>Munich</p>
          </div>
          <div onClick={handleChangeCity} className='pic4'>
              <p>Frankfurt</p>
          </div>
          </div>
          <div onClick={handleChangeCity} className='pic3'>
              <p>Hannover</p>
          </div>
          <div onClick={handleChangeCity} className='pic5'>
              <p>Berlin</p>
          </div>
          <div onClick={handleChangeCity} className='pic6'>
              <p>Leipzig</p>
          </div>
          </div>
        </div>
      </div>
      <div id="mainMap">

      </div>
    </div>   
   
  );
};

export default Home;