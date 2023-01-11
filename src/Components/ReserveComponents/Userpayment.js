import React from "react";
import UserPay from "../ReserveComponents/UserPay";
import UserpaymentSelection from "../ReserveComponents/UserpaymentSelection";
 import "./UserPaymentSelection.css";

const Userpayment = () => {
  return (
    <div className="paymentSelection-Container">
      <div>
        <UserPay />
      </div>
      <div>
        <UserpaymentSelection />
      </div>
    </div>
  );
};

export default Userpayment;