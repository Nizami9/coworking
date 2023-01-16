// import Space from "../../spaceData.json";
import { Link, useParams, Navigate  } from "react-router-dom";
import { useSpaceContext } from '../../context/SpaceContext';
import { useAuthContext } from '../../context/AuthContext';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";

const CheckboxList = () => {

  const {searchKey} = useParams();

  const { allSpaces } = useSpaceContext();
  const { isAuthenticated } = useAuthContext();

  const spaces = allSpaces.filter(space => space.city.toLowerCase().includes(searchKey)||(space.address.toLowerCase()).includes(searchKey));
  console.log("spaces are ",spaces);

  const checkAuth = (id) =>{
    console.log("inside checkAuth... and auth is ",isAuthenticated);
    (isAuthenticated)  
    ? <Navigate to={`../space/${id}`} />     //to={`../space/${space.id}`}
    : <Navigate to='/signin' />
  }
 //to={`../space/${space.id}`}             onClick={checkAuth(space.id)}

  return (
    <div className="locations">
                <ScrollToTopOnMount />
     <div className="view-list"> <h6>viewing germany space locations</h6></div>
     <div className="budget-button">
        <div >
          <button className="budget-wrapper" onClick={()=>{console.log("min")}}>Mini.Budget</button>
        </div>
        <div>
          <button className="budget-wrapper" onClick={()=>{console.log("max")}}>Max.Budget</button>
        </div>
      </div>
      {spaces &&
        spaces.map((space) => {
          return (
            <div className="card" key={space.id}>
                {" "}
                <img src={space.imgUrl} alt="img" className="img" />
              <div className="list-wrapper">
                <div className="title">
                  <div className='checkBoxTitle'>{space.title}</div>
                  <div className="address-city-country">
                    <div className="address"> {space.address}</div>
                    <div className="city"> {space.city} </div>
                    <div className="country"> {space.counrty} </div>    
                    <div><Link className="spacesLink" to={ isAuthenticated ? `../space/${space.id}` : '/signin'}>Explore space→</Link></div>
                    <div className="area-maxPeople-costperDay">
                    <div className="area"> {space.area}</div>
                    <div className="maxpeople"> {space.maxPeople} </div>
                    <div className="costperDay"> {space.costperDay}</div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CheckboxList;
