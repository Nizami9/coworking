import React from "react";
import Space from "../../spaceData.json";
// import "./styleChangePass.css";
import { useState } from "react";
import { useSpaceContext } from '../../context/SpaceContext';


 // console.log("space ",selectedSpace)

function UserpaymentSelection() {
  const {toDate,fromDate,fromTime,toTime,selectedSpace}= useSpaceContext();
  console.log('in payment page space is ',selectedSpace )
  // let space = Space[0];
 
  let spaceComponent = (
    <div className="p4-space-wrapper">
      <div className="space-wrape">
        {" "}
        <h4>Reserve Space </h4>
      </div>
      <div className="space-wrapper-2">
        {selectedSpace && (
          <div>
            <hr />
            <div className="p4-img-and-details" key={selectedSpace.id}>
              <img src={selectedSpace.imgUrl} alt="img" className="p4-img" />
              <div className="p4-title-and-details">
                <div className="p4-title">
                  <h4> {selectedSpace.title}</h4>
                </div>
                <div className="p4-address-city-country">
                  <img
                    src={require("../../icons/location-icon.png")}
                    alt="location-icon"
                    className="p4-location-icon"
                  />
                  {selectedSpace.address}
                  {","}
                  {selectedSpace.city}
                  {","}
                  {selectedSpace.counrty}
                </div>
              </div>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div className="show-date-time--">
        <div>
          <img
            src={require("../../icons/calendar-icon.png")}
            alt="calendar-icon"
            className="calendar-icon"
          />
          <span className="show-date">
            {fromDate.toDateString()}
            {" - "}
            {toDate.toDateString()}
          </span>
        </div>

        <div className="show-times">
          <img
            src={require("../../icons/clock-icon.png")}
            alt="clock-icon"
            className="clock-icon"
          />
          {fromTime}
          {" - "}
          {toTime}
        </div>
        
      </div>
      <div className="total-pay"><h3>Total</h3></div>
    </div>
  );

  return <div>{spaceComponent}</div>;
}

export default UserpaymentSelection;
