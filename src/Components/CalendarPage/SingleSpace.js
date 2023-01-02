import React from 'react';
import Space from "../../spaceData.json";
import './styleDateSelect.css'

function SingleSpace() {
  let space = Space[0];

  let spaceComponent = (
    <div className="p4-space-wrapper">
      <h2>Reserve Space </h2>
      {space &&
        <div>
            <hr />
        <div className="p4-img-and-details" key={space.id}>
          <img src={space.imgUrl} alt="img" className="p4-img" />
          <div className="p4-title-and-details">
            <div className="p4-title">
              <h4> {space.title}</h4>
              </div>
              <div className="p4-address-city-country">
                <img src={require('../../icons/location-icon.png')} alt="location-icon" className="p4-location-icon" />
                {space.address}{","}
                {space.city}{","}
                {space.counrty}
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
