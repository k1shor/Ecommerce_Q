import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="w-1/2 mx-auto my-5 p-5">
        <fieldset className="fieldset w-full bg-base-200 border border-base-300 px-10 py-10 rounded-box my-10 text-3xl">
          <legend className="fieldset-legend">Register Here</legend>

          <label className="fieldset-label">Username</label>
          <input type="text" className="input w-full" placeholder="FirstName" required />

          <label className="fieldset-label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" required />

          <label className="fieldset-label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            required
          />

          <button className="btn btn-danger mt-4" >
             <Link to={"/"}>Register</Link>
          </button>
          <div className="flex justify-between text-lg">
            <span>
              {" "}
              Already Registered? <Link to="/login" className="text-blue-500 underline"> Login</Link>
            </span>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Register;
