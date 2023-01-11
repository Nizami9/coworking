import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UserPay = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="paymentSelection-payM">
      <div>
        <Link className="back-link" to="/back">
          <img
            alt="back-arrow-icon"
            src={require("../../icons/orange-arrow.png")}
          />
          <span>Go back</span>
        </Link>
      </div>
      <div className="payM-wrapper">
        {/* <div className="line">line</div> */}
        <div className="inputForm">
          <div className="payM">
            {" "}
            <h1>Payment selection</h1>
          </div>
          <div className="input-wrape">
            <form 
              onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            >
              <h6>Payment method</h6>
              <input
                className="form-2"
                style={{
                  height: "44px",
                  width: "450px",
                }}
                {...register("payment method")}
                placeholder="Apply pay"
              />
              <br></br>
              <h6>Name</h6>
              <input
                required
                className="form-2"
                style={{
                  height: "44px",
                  width: "450px",
                }}
                {...register("name")}
                placeholder="kingsley best"
              />
              <br></br>
              <h6>Card Number</h6>
              <input
                required
                className="form-2"
                style={{
                  height: "44px",
                  width: "450px",
                }}
                {...register("Card Number")}
                placeholder="xxxx xxxx xxxx xxxx"
              ></input>
              <br></br>
              <button className="form-2"
                style={{
                  height: "44px",
                  width: "200px",
                  background: "#FF7848",
                }}
                type="submit"
              >
                <Link to='/thank-you'>Complete</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPay;
