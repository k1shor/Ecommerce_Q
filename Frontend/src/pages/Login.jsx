import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-1/2 mx-auto my-5">
        <fieldset className="fieldset w-full  border border-base-300 px-10 py-10 rounded-box my-10 text-3xl  bg-yellow-200 ">
          <div className="p-5">
            <legend className="fieldset-legend mb-2"> QPSL Login</legend>

            <label className="fieldset-label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" required />

            <label className="fieldset-label" required>Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <button className="btn btn-danger mt-4 text-white">Login</button>

            <div className="flex justify-between text-lg ">
              <span>
                {" "}
                Do Not Have An Account?{" "}
                <Link to="/register" className="text-blue-500 underline ">
                  {" "}
                  Sign Up
                </Link>
              </span>
              <Link to={"forgetpassword"} className="text-blue-500 underline">
                {" "}
                Forget Password
              </Link>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Login;
