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
const Home = () => {

  const [noResult,setNoResult]=useState(false);
  const [users,setUsers]=useState([]);
  const [searchKey,setSearchKey]=useState([]);
  const [availaleSpaces,setAvaialableSpaces]=useState([]);
  const [clickedCity, setClickedCity] = useState();
  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

  const navigate = useNavigate();

   const getAllUsers = async () =>{
    const { data } = await axios.get('https://real-red-gosling-hose.cyclic.app/spaces');
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


const handleSearch = async(e) => {
  //e.preventDefault();
   console.log(searchKey);
   const { data } = await axios.post(`https://real-red-gosling-hose.cyclic.app/spaces/location`,{
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
    zoom: 4.2 // starting zoom
  });
  map.addControl(new mapboxgl.NavigationControl());

  map.on('load', () => {
    map.addSource('places', {
// This GeoJSON contains features that include an "icon"
// property. The value of the "icon" property corresponds
// to an image in the Mapbox Streets style's sprite.
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'description':'<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
'icon': 'theatre'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.038659, 38.931567]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
'icon': 'theatre'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.003168, 38.894651]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
'icon': 'bar'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.090372, 38.881189]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
'icon': 'art-gallery'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.111561, 38.882342]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
'icon': 'bicycle'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.052477, 38.943951]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Capital Pride Parade</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
'icon': 'rocket'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.043444, 38.909664]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.031706, 38.914581]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.020945, 38.878241]
}
},
{
'type': 'Feature',
'properties': {
'description':
'<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.007481, 38.876516]
}
}
]
}
});
// Add a layer showing the places.
map.addLayer({
'id': 'places',
'type': 'symbol',
'source': 'places',
'layout': {
'icon-image': ['get', 'icon'],
'icon-allow-overlap': true
}
});
 
// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', (e) => {
// Copy coordinates array.
const coordinates = e.features[0].geometry.coordinates.slice();
const description = e.features[0].properties.description;
 
// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}
 
new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});
 
// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'places', () => {
map.getCanvas().style.cursor = 'pointer';
});
 
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'places', () => {
map.getCanvas().style.cursor = '';
});
});
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