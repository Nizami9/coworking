import List from "./List";
import Checkbox from "./Checkbox";
import "./Locations.css"

const UsersLocations = () => {
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

export default UsersLocations;
