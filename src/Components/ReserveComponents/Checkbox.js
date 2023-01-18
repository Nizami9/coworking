import { useState } from "react";
import "./Checkbox.css";
import ScrollToTopOnMount from "../../ScrollToTopOnMount";

// const Checkbox = ({label} CLEAN UP) => {
const Checkbox = ({onClick})=> {
  const [Checkbox, setCheckbox] = useState("");


  return (
    <div className="checkbox-container">
                <ScrollToTopOnMount />
      <div className="office-sp">
        <h3>Office Space</h3>
      </div>
<div className="check-wrapper">
      <div className="duration">
        <h2>On our platform, you can <span className="pEffect">easily book</span> a workplace on</h2>
      </div>
      <div className="input-wrapper">
        <ul className="input-wrapperUL">
          <li>Daily</li>
          <li>Monthly</li>
          <li>Annually</li>
        </ul>
      </div>
      <div className="budget">
        <div className="budget-t"><h3>Choose the budget that <span className="pEffect">suits</span>you</h3></div>
        <br></br>
        <p>The average desk price in Germany is 30 € per day.</p>
        <br/>
        <p className="secondPBudget">You can choose a workplace for yourself by simply clicking on the buttons <span className="budgetRange">Mini.Budget</span> or <span className="budgetRange">Max.Budget</span> at the top of the page</p>
      {/* <div className="budget-button">
        <div >
          <button className="budget-wrapper">Mini.Budget</button>
        </div>
        <div>
          <button className="budget-wrapper">Max.Budget</button>
        </div>
      </div> */}
      {/* <div className="apply-button">
        <div className="clear-button">
          <button className="apply">Clear</button>
        </div>
        <div>
          <button className="apply-wrapper">Apply</button>
        </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};
export default Checkbox;
