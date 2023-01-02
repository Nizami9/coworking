import ReserveSpace from "../ReserveComponents/ReserveSpace";
 import "./UserReserveSelection.css";
import Information from "../ReserveComponents/Information";
import React from "react";


const Community = () => {
  return (
      <div className="reserveSpace-container">
          
          <div>
            <Information />
          </div>
          <div>
            < ReserveSpace />
          </div>
      </div>
  );
};

export default Community;