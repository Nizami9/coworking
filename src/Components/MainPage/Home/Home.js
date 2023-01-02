import "./Home.css"
import "./MonumentExtended-FreeForPersonal/MonumentExtended-Regular.otf";
import { NavLink } from "react-router-dom";
const Home = () => {
  return ( 
    <div className="container">
      <div className="leftContainerMain">
        <h1>Find your perfect workspace</h1>
        <p>From a single desk to a whole building <br/>The choice is yours</p>
        <div className="leftContInputs">
          <div className="locationInput">
            {/* <i class="fa fa-user icon"></i> */}
            <input type='text'></input>
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
         <button><p > <NavLink to ="availablespace" >Search</NavLink></p></button>
        </div>
      </div>
      <div className="rightContainerMain"></div>
      <div className="bottomContainer">
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