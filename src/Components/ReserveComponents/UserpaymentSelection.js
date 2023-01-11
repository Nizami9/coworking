import React from "react";
import Space from "../../spaceData.json";
// import "./styleChangePass.css";
import { useState } from "react";

function UserpaymentSelection() {
  let space = Space[0];
  const [toDate, setToDate] = useState(new Date());
  const [fromDate, setFromDate] = useState(new Date());
  const [fromTime, setFromTime] = useState("00:00");
  const [toTime, setToTime] = useState("23:00");

  let spaceComponent = (
    <div className="p4-space-wrapper">
      <div className="space-wrape">
        {" "}
        <h2>Reserve Space </h2>
      </div>
      <div className="space-wrapper-2">
        {space && (
          <div>
            <hr />
            <div className="p4-img-and-details" key={space.id}>
              <img src={space.imgUrl} alt="img" className="p4-img" />
              <div className="p4-title-and-details">
                <div className="p4-title">
                  <h4> {space.title}</h4>
                </div>
                <div className="p4-address-city-country">
                  <img
                    src={require("../../icons/location-icon.png")}
                    alt="location-icon"
                    className="p4-location-icon"
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
      <div className="show-date-time">
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
