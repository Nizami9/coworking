import React from "react";

// import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A : ' + this.state.value);
  //   event.preventDefault();
  // }



  render() {
    return (
      <div className="information">
        <div>
          <Link className="back-link" to="/back">
            <img
              alt="back-arrow-icon"
              src={require("../../icons/orange-arrow.png")}
            />
            <span>Go back</span>
          </Link>
        </div>
        <div className="info-title">
          {" "}
          <h3 className="info">Enter information for your order</h3>
        </div>
        <div className="form-1-wrapper">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h6>Name</h6>
              <input
                className="form"
                style={{
                  height: "44px",
                  width: "450px",
                }}
                type="name"
                placeholder="Name"
              />
              <h6>Email</h6>
              <input
                className="form"
                style={{
                  height: "44px",
                  width: "450px",
                }}
                type="text"
                placeholder="email"
              />
              <h6>Company</h6>
              <input
                className="form"
                style={{
                  height: "44px",
                  width: "450px",
                }}
                type="text"
                placeholder="Company"
              />
              <h6>Phone Number</h6>
              <PhoneInput
                country={"de"}
                value={this.state.phone}
                onChange={(phone) => this.setState({ phone })}
              />
              <div className="input-message">
                <input
                  className="form"
                  style={{
                   height: "120px",
                    width: "450px",
                  }}
                  type="text"
                  placeholder="Message or additional reguirement"
                />
              </div>
            </label>
            <button
            className="form"
            style={{
              height: "44px",
              width: "305px",
              background: " #FF7848",
            }}
            >
              <Link to='/Userpayment'>Submit</Link></button>
          </form>
        </div>
      </div>
    );
  }
}
