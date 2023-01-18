// import Space from "../../spaceData.json";
import { Link, useParams, Navigate  } from "react-router-dom";
import { useSpaceContext } from '../../context/SpaceContext';
import { useAuthContext } from '../../context/AuthContext';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import React, {useState, useEffect} from 'react';

const CheckboxList = () => {
  const {searchKey} = useParams();
  const { allSpaces } = useSpaceContext();
  const { isAuthenticated } = useAuthContext();
  const [localSpaces, setLocalSpaces] = useState(allSpaces)
  const [sortBy, setSortBy] = useState()

   //const spaces = allSpaces.filter(space => space.city.toLowerCase().includes(searchKey)||(space.address.toLowerCase()).includes(searchKey));
   //console.log("spaces are ",spaces);

   const arrangeByPrice = (value) => {
    if(value === 'max'){
      setSortBy(value)
    } else if(value === 'min'){
      setSortBy(value)
    }
   }

   useEffect(()=>{
    if(sortBy === 'min'){
      const sorted = allSpaces.sort((a, b) => (Number(a.costperday.slice(0, -1)) > Number(b.costperday.slice(0, -1))) ? 1 : ((Number(b.costperday.slice(0, -1)) > Number(a.costperday.slice(0, -1))) ? -1 : 0))
      setLocalSpaces(sorted);
      console.log('all sorted are '+ sorted)
    } else if(sortBy === 'max'){
      const sorted = allSpaces.sort((b, a) => (Number(a.costperday.slice(0, -1)) > Number(b.costperday.slice(0, -1))) ? 1 : ((Number(b.costperday.slice(0, -1)) > Number(a.costperday.slice(0, -1))) ? -1 : 0))
      setLocalSpaces(sorted);
    } else (
      console.log('Original')
    )
   }, [sortBy])

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
        <div>
          <button className="budget-wrapper" onClick={()=>{arrangeByPrice("max")}}>Mini.Budget</button>
        </div>
        <div>
          <button className="budget-wrapper" onClick={()=>{arrangeByPrice("min")}}>Max.Budget</button>
        </div>
      </div>
      {spaces &&
        spaces.map((space) => {
          return (
            <div className="card" key={space.spaceid}>
                {" "}
                <img src={space.imgurl} alt="img" className="img" />
              <div className="list-wrapper">
                <div className="title">
                  <div className='checkBoxTitle'>{space.title}</div>
                  <div className="address-city-country">
                    <div className="address"> {space.address}</div>
                    <div className="city"> {space.city} </div>
                    <div className="country"> {space.counrty} </div>    
                    <div><Link className="spacesLink" to={ isAuthenticated ? `../space/${space.spaceid}` : '/signin'}>Explore space→</Link></div>
                    <div className="area-maxPeople-costperDay">
                    <div className="area"> {space.area + ' m²'}</div>
                    <div className="maxpeople"> {space.maxpeople} </div>
                    <div className="costperDay"> {space.costperday +' €'}</div>
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
