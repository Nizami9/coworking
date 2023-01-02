import List from "./Home/List";
import Checkbox from "./Checkbox";
import "./locations.css";

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
