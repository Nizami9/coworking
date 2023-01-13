import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, Navigate  } from "react-router-dom";
import { useBookContext } from '../../context/BookContext';
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import "./BookTour.css"

export default function NameForm() { 
  const [phone, setPhone] = useState();
  const [date, setDate] = useState(new Date());
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    company: '',
    requirements: ''
  });


  const {setFormDetails}= useBookContext();

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
      return <Navigate to='/Userpayment' />
    } catch (err) {
      console.log(err);
    }


  }
  return (
    <div className="bookTourRightContainer">
        <ScrollToTopOnMount />
      <div className="bookTourRightInfoTitle">
        <h3 className="bookTourRightInfo">Enter information for your Booking</h3>
      </div>
      <div className="bookTourRightForm">
        <form onSubmit={handleSubmit}>
          <label>
            <h5>Name</h5>
            <input
              className="bookTourForm"
              name='fullname'
              type="name"
              placeholder="Name"
              onChange={handleChange}
              />
            <h5>Email</h5>
            <input
              className="bookTourForm"
              type="text"
              placeholder="email"
              name='email'
              onChange={handleChange}
            />
            <h5>Company</h5>
            <input
              className="bookTourForm"
              type="text"
              placeholder="Company"
              name='company'
              onChange={handleChange}
            />
            <h5>Phone Number</h5>
            <PhoneInput
              className="bookTourForm"
              country={"de"}
              value={details.phone}
              name='phone'
              onChange={(phoneNo) => setPhone(phoneNo)}
            />
            <div className="bookTourRightInputMessage">
              <input
                className="bookTourRightMessage"
                type="text"
                placeholder="Message or additional requirements"
                onChange={handleChange}
              />
            </div>
          </label>
          <button type='submit' className="submitButtonBookTour">
            <Link to='/Userpayment'>Submit</Link>
          </button>
        </form>
      </div>
    </div>
  );

}
