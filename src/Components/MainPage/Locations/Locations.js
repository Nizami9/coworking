import React from 'react';
import "./Locations.css";
import SpaceData from "../../../spaceData.json";
const Locations = () => {
  return (
    <div  style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }} >
      {SpaceData.map(space =>
          space.title + space.counrty + space.city
        )}
    </div>
  )
}

export default Locations
