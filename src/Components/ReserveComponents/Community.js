import ReserveSpace from "../ReserveComponents/ReserveSpace";
 import "./ReserveSpace.css";
import ReserveSpaceInfo from "../ReserveComponents/ReserveSpaceInfo";
import React from "react";


const Community = () => {
  return (
      <div className="reserveSpace-container">   
          <div>
            <ReserveSpaceInfo />
          </div>
          <div>
            <ReserveSpace />
          </div>
      </div>
  );
};

export default Community;