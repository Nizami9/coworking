import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";




const PaymentSelection = () => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="paymentSelection-payM">
      <h1>hello world!</h1>

      {/* <div className="line">line</div> */}
      <div className="inputForm">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <h6>Payment method</h6>
          <input
            className="form-2"
            style={{
              height: "44px",
              width: "522px",
            }}
            {...register("payment method")}
            placeholder="Apply pay"
          />
          <br></br>
          <h6>Name</h6>
          <input
            className="form-2"
            style={{
              height: "44px",
              width: "522px",
            }}
            {...register("name")}
            placeholder="kingsley best"
          />
          <br></br>
          <h6>Card Number</h6>
          <input
            className="form-2"
            style={{
              height: "44px",
              width: "522px",
            }}
            {...register("Card Number")}
            placeholder="xxxx xxxx xxxx xxxx"></input>
           <br></br>
<button style={{ height: "44px", width: "200px", background: "#FF7848" }} type="submit">
  Complete
</button>

         
        </form>
      </div>
    </div>
  );
};

export default PaymentSelection;
