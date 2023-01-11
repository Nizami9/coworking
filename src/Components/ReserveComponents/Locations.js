import CheckboxList from "../ReserveComponents/CheckboxList";
import Checkbox from "../ReserveComponents/Checkbox";
 import "./Checkbox.css";

const Locations = () => {
  return (
    <div className="locations-container">
      
      <div className="checkbox"> 
      <Checkbox /> 
      </div>

      <div className="list">
        <CheckboxList />
      </div>
      <div></div>
    </div>
  );
};

export default Locations;
