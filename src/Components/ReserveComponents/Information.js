import { useState } from "react";
import { useForm } from "react-hook-form";

import React from "react";

const Information = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="information">
      <div className="">
        <h3>Enter information for your order</h3>
      </div>
      {/* <div className="line">line</div> */}
      <div className="inputForm">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <h6>Name</h6>
          <input className="form-2"
            style={{
              height: "44px",
              width: "522px",
              
            }}
            {...register("Name")}
            placeholder="Name"
          />
          <br></br>
          <h6>Email</h6>
          <input className="form-2"
            style={{
              height: "44px",
              width: "522px",
              
            }}
            {...register("email")}
            placeholder="email"
          />
          <br></br>
          <h6>Company Name</h6>
          <input className="form-2"
            style={{
              height: "44px",
              width: "522px",
           
            }}
            {...register("companyName")}
            placeholder="company name"
          />
          <br></br>
          <div>

          
          <textarea
            {...register("mmm")}
            placeholder="Message or additional requirements"
          />
          <p>{data}</p>
          <input style={{height:"44px",
          width:"200px",
          background:"#FF7848",
         
          
          }} type="submit" />
    </div>
        </form>
      </div></div>
  );
};

export default Information;
