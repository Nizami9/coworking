import CheckboxList from "../ReserveComponents/CheckboxList";
import Checkbox from "../ReserveComponents/Checkbox";

const Locations = () => {
  return (
    <div className="locations-container">
      <div className="checkbox"> 
      <Checkbox /> 
      </div>
      <div className="list">
        <CheckboxList />
      </div>
    </div>
  );
};
export default Locations;
