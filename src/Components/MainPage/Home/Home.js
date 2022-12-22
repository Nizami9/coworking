import "./Home.css"
import "./MonumentExtended-FreeForPersonal/MonumentExtended-Regular.otf";

const Home = () => {
  return ( 
    <div className="container">
      <div className="leftContainerMain">
        <h1>Find your perfect workspace</h1>
        <p>From a single desk to a whole building <br/>The choice is yours</p>
        <div className="leftContInputs">
          <div className="locationInput">
            <i class="fa fa-user icon"></i>
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
          <button><p>Search</p></button>
        </div>
      </div>
      <div className="rightContainerMain"></div>
    </div>   
   
  );
};

export default Home;