import CheckboxList from "../ReserveComponents/CheckboxList";
import Checkbox from "../ReserveComponents/Checkbox";
import ScrollToTopOnMount from "../../ScrollToTopOnMount";

const Locations = () => {
  return (
    <div className="locations-container">
          <ScrollToTopOnMount />
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
