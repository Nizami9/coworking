import React from 'react';
import Space from "../../spaceData.json";
import './styleDateSelect.css';
import { useSpaceContext } from '../../context/SpaceContext';



function SingleSpace() {

 // const{id}=useParams();

  const{ selectedSpace} = useSpaceContext();

  let spaceComponent = (
    <div className="p4-space-wrapper">
      <h2>Reserve Space </h2>
      {selectedSpace &&
        <div>
            <hr className='cal-page-hr'/>
        <div className="cal-page-p4-img-and-details" key={selectedSpace.spaceid}>
          <img src={selectedSpace.imgurl} alt="img" className="cal-p4-img" />
          <div className="p4-title-and-details">
            <div className="p4-title">
              <h4> {selectedSpace.title}</h4>
              </div>
              <div className="cal-page-address-city-country">
                <img src={require('../../icons/location-icon.png')} alt="location-icon" className="p4-location-icon" />
                {selectedSpace.address}{", "}
                {selectedSpace.city}{", "}
                {selectedSpace.counrty}
              </div>
            </div>
        </div>
           <hr className='cal-page-hr'/>
           </div>
      }
    </div>
  )

  return (
    <div>
      {spaceComponent}
    </div>
  )
}

export default SingleSpace
