import React from "react";
import PaymentSelection from "../ReserveComponents/PaymentSelection";
import UserReserveSpace from "../ReserveComponents/UserpaymentSelection";
import "./PaymentSelection.css";

const Userpayment = () => {
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

export default Userpayment;