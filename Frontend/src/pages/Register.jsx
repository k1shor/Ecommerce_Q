import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/userApi";

const Register = () => {
  let [firstName ,setFirstname] = useState('')
  let [lastname, setLastname] = useState('')
  let [username, setUsername] = useState('')
  let [email , setEmail ] = useState('')
  let [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = e =>{
    e.preventDefault()
    register(firstName, lastname, username, email, password)
    .then(data =>{
        if(data.error){ 
          setError(data.error)
          setSuccess('')
        }
        else{
          setSuccess(data.message)
          setError('')
          setFirstname('')
          setLastname('')
          setUsername('')
          setEmail('')
          setPassword('')
        }
      })
      .catch(error => console.log(error))
  }

  const showError = () =>{
    if(error){
        return <div className="bg-red-200 text-2xl text-center">{error}</div>
      }
  }

  const showSuccess = () =>{
    if(success){
  return <div className="bg-green-200 text-2xl text-center">{success}</div>
    }
  }

  return (
    <>
      <div className="w-1/2 mx-auto my-5 p-5">
        <fieldset className="fieldset w-full bg-base-200 border border-base-300 px-10 py-10 rounded-box my-10 text-3xl">
          <legend className="fieldset-legend">Register Here</legend>
          {showError()}
          {showSuccess()}

          <label className="fieldset-label">FirstName</label>
          <input type="text" className="input w-full" placeholder="Firstname" onChange={e=> setFirstname(e.target.value)} value={firstName} required/>

          <label className="fieldset-label">Lastname</label>
          <input type="text" className="input w-full" placeholder="Lastname" onChange={e=> setLastname(e.target.value)} value={lastname} />

          <label className="fieldset-label">Username</label>
          <input type="text" className="input w-full" placeholder="Username" onChange={e=> setUsername(e.target.value)} value={username} required />

          <label className="fieldset-label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" onChange={e=> setEmail(e.target.value)} value={email}required />

          <label className="fieldset-label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            onChange={e=> setPassword(e.target.value)}
            value={password}
            required
          />

          <button className="btn btn-danger mt-4" onClick={handleSubmit}>
             Register
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
