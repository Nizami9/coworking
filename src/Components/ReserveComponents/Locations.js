import List from "../ReserveComponents/List";
import Checkbox from "../ReserveComponents/Checkbox";
 import "./Locations.css";

const Locations = () => {
  return (
    <div className="locations-container">
      
      <div className="checkbox"> 
      <Checkbox /> 
      </div>

      <div className="list">
        <List />
      </div>
      <div></div>
    </div>
  );
};

export default Locations;
