import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { useBookContext } from '../../context/BookContext';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import Userpayment from "./Userpayment";


export default function NameForm() {
 
  const [phone, setPhone] = useState();
  const [valid, setValid] = useState(false);
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    company: '',
    phone:'',
    requirements: ''
  });
  const {setFormDetails}= useBookContext();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    e.preventDefault();
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  }


  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setFormDetails(details);
      console.log("entered details are   ",  details );
      if(!details.fullname || !details.email) {
        console.log("inside if")
        setValid(true)
        return;
      } else {
        console.log("inside else")
        setValid(false)
        return navigate('/Userpayment');
      }
    } catch (err) {
      console.log(err);
    }


  }
  return (
    <div className="information">
        <ScrollToTopOnMount />
      <div>
        <Link className="back-link" onClick={() => navigate(-1)}>
          <img
            alt="back-arrow-icon"
            src={require("../../icons/orange-arrow.png")}
          />
          <span>Go back</span>
        </Link>
      </div>
      <div className="info-title">
        {" "}
        <h3 className="info">Enter information </h3>
      </div>

      <div className="form-1-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            <h6>Name</h6>
            <input
              className="form"
              style={{
                height: "44px",
                width: "465px",
              }}
              name='fullname'
              type="name"
              placeholder="Name"
              onChange={handleChange}
              required
              />
            <h6>Email</h6>
            <input
              className="form"
              style={{
                height: "44px",
                width: "465px",
              }}
              type="text"
              placeholder="email"
              name='email'
              onChange={handleChange}
              required
            />
            <h6>Company</h6>
            <input
              className="form"
              style={{
                height: "44px",
                width: "465px",
              }}
              type="text"
              placeholder="Company"
              name='company'
              onChange={handleChange}
            />
            <h6>Phone Number</h6>
            <PhoneInput
              className="reserveSpaceInfoPhone"
              country={"de"}
              value={phone}
              name='phone'
              onChange={(phoneNo) => setPhone(phoneNo)}
            />
            <div className="input-message">
              <input
                className="form"
                style={{
                  height: "120px",
                  width: "465px",
                }}
                name='requirements'
                type="text"
                placeholder="Message or additional requirements"
                onChange={handleChange}
              />
            </div>
          </label>
          <button
          onSubmit={handleSubmit}
          type='submit'
          font-size='16'
          className="form"
          style={{
          height: "44px",
          width: "305px",
          background: " #FF7848",
            }}
          >Submit</button>
        </form>
      </div>
    </div>
);
}
