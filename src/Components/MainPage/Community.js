import ReserveSpace from "./Home/UserReserveSpace";
import "./UserReserveSpace.css";
import Information from "./Home/Information";
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