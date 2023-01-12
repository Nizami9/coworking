import { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ label }) => {
  const [Checkbox, setCheckbox] = useState("");
  return (
    <div className="checkbox-container">
      <div className="office-sp">
        <h3>Office Space</h3>
      </div>
<div className="check-wrapper">
      <div className="duration">
        <h2>Duration</h2>
      </div>
      <div className="input-wrapper">
        <label>
          <div className="checkbox-input">
            <input className="check" type="checkbox"  checkbox={Checkbox} />
            <div className="annually">
              <p>Daily</p>
            </div>
          </div>
          <br></br>
          <div className="checkbox-input">
            <input className="check" type="checkbox" checkbox={Checkbox} />
            <div className="annually">
              <p>Monthly</p>
            </div>
          </div>
          <br></br>
          <div className="checkbox-input">
            <input className="check" type="checkbox" checkbox={Checkbox} />
            <div className="annually">
              <p>Annually</p>
            </div>
          </div>
          <span>{label}</span>
        </label>
      </div>
      <div className="budget">
        <div className="budget-t"><h3>Budget</h3></div>
        <br></br>
        <p>The average desk price in Germany is 252 € per month</p>
      <div className="budget-button">
        <div >
          <button className="budget-wrapper" >Mini.Budget</button>
        </div>
        <div>
          <button className="budget-wrapper">Max.Budget</button>
        </div>
      </div>
      <div className="apply-button">
        <div className="clear-button">
          <button className="apply">Clear</button>
        </div>
        <div>
          <button className="apply-wrapper">Apply</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Checkbox;
