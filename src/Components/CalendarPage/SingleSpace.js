import React from 'react';
import Space from "../../spaceData.json";
import './styleDateSelect.css';
import { useSpaceContext } from '../../context/SpaceContext';



function SingleSpace() {

 // const{id}=useParams();

  const{ selectedSpace } = useSpaceContext();
  console.log(selectedSpace)


  let spaceComponent = (
    <div className="p4-space-wrapper">
      <h2>Reserve Space </h2>
      {selectedSpace &&
        <div>
            <hr />
        <div className="p4-img-and-details" key={selectedSpace.id}>
          <img src={selectedSpace.imgUrl} alt="img" className="p4-img" />
          <div className="p4-title-and-details">
            <div className="p4-title">
              <h4> {selectedSpace.title}</h4>
              </div>
              <div className="p4-address-city-country">
                <img src={require('../../icons/location-icon.png')} alt="location-icon" className="p4-location-icon" />
                {selectedSpace.address}{","}
                {selectedSpace.city}{","}
                {selectedSpace.counrty}
              </div>
            </div>
        </div>
           <hr />
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
