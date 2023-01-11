import React from "react";
import Space from "../../spaceData.json";
// import "./styleChangePass.css";
import { useState } from "react";

function ReserveSpace() {
  let space = Space[0];
  const [toDate, setToDate] = useState(new Date());
  const [fromDate, setFromDate] = useState(new Date());
  const [fromTime, setFromTime] = useState("00:00");
  const [toTime, setToTime] = useState("23:00");

  let spaceComponent = (
    <div className="p4-space-wrapper-king">
      <div className="space-wrape-sp">
        {" "}
        <h2>Reserve Space </h2>
      </div>
      <div className="space-wrapper-sp">
        {space && (
          <div>
            <hr />
            <div className="p4-img-and-details-king" key={space.id}>
              <img src={space.imgUrl} alt="img" className="p4-img-sp" />
              <div className="p4-title-and-details-king">
                <div className="p4-title">
                  <h4> {space.title}</h4>
                </div>
                <div className="p4-address-city-country-king">
                  <img
                    src={require("../../icons/location-icon.png")}
                    alt="location-icon"
                    className="p4-location-icon-king"
                  />
                  {space.address}
                  {","}
                  {space.city}
                  {","}
                  {space.counrty}
                </div>
              </div>
            </div>
            <hr />
          </div>
        )}
      </div>
      <div className="show-date-time-sp">
        <div>
          <img
            src={require("../../icons/calendar-icon.png")}
            alt="calendar-icon"
            className="calendar-icon-ss"
          />
          <span className="show-date-sp">
            {fromDate.toDateString()}
            {" - "}
            {toDate.toDateString()}
          </span>
        </div>

        <div className="show-times-sp">
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

export default ReserveSpace;
