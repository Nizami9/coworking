import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { FieldSet, InputField } from "fannypack";
import { usePaymentInputs } from "react-payment-inputs";

const UserPay = () => {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();
  const { erroredInputs, touchedInputs } = meta;

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
                placeholder="Visa"
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
                placeholder="name    surname"
              />

              <div className="visa-card">
                <FieldSet>
                  <h6>Card number</h6>
                  <InputField
                    // Here is where React Payment Inputs injects itself into the input element.
                    {...getCardNumberProps()}
                    placeholder="xxxx xxxx xxxx xxxx"
                    // label="Card number"
                    inputRef={getCardNumberProps().ref}
                    // You can retrieve error state by making use of the error & touched attributes in `meta`.
                    state={
                      erroredInputs.cardNumber && touchedInputs.cardNumber
                        ? "danger"
                        : undefined
                    }
                    validationText={
                      touchedInputs.cardNumber && erroredInputs.cardNumber
                    }
                    maxWidth="750px" background="#FFFFFF"
                  />

        

                  <div className="expiry-cvc">
                   
                    <InputField
                      {...getExpiryDateProps()}
                      label="Expiry"
                      inputRef={getExpiryDateProps().ref}
                      state={
                        erroredInputs.expiryDate && touchedInputs.expiryDate
                          ? "danger"
                          : undefined
                      }
                      validationText={
                        touchedInputs.expiryDate && erroredInputs.expiryDate
                      }
                      maxWidth="8rem" 
                    />

                    <div className="cvv">
                      <InputField
                        {...getCVCProps()}
                        placeholder="123"
                        label="CVC"
                        inputRef={getCVCProps().ref}
                        state={
                          erroredInputs.cvc && touchedInputs.cvc
                            ? "danger"
                            : undefined
                        }
                        validationText={touchedInputs.cvc && erroredInputs.cvc}
                        maxWidth="rem" 
                      />
                    </div>
                  </div>
                </FieldSet>
              </div>

              <button
                className="form-2"
                style={{
                  height: "44px",
                  width: "200px",
                  background: "#FF7848",
                }}
                type="submit"
              >
                <Link to="/thank-you">Complete</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPay;
