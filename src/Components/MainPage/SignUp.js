import React from "react";
import PaymentSelection from "./Home/PaymentSelection";
import UserReserveSpace from "./Home/UserReserveSpace";
import "./paymentSelection.css";

const SignUp = () => {
  return (
    <div className="paymentSelection-Container">
      <div>
        <PaymentSelection />
      </div>
      <div>
        <UserReserveSpace />
      </div>
    </div>
  );
};

export default SignUp;
