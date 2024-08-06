import React from "react";
import "./Form.css";
import { useState } from "react";
const Form = (props) => {
  const [firstName,setFirstName] = useState('')
  const [lastname,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmpassword,setConfirmpassword] = useState('')
 const createuser = (e)=> {
  e.preventDefault();
  const myuser = {firstName,lastname,email,password,confirmpassword}
  props.addme(myuser)
}



  return (
    <div>
      <form onSubmit={createuser}>
        <div className="container col-2">
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="firstname">
              First Name:
            </label>
            <input
              onChange={(e)=>setFirstName(e.target.value)}
              value={firstName}
              className="form-control"
              type="text"
              id="firstname"
              name="firstname"
            />
          </div>
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="lastname">
              Last Name:
            </label>
            <input
              onChange={(e)=>setLastName(e.target.value)}
              className="form-control"
              type="text"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="confirmpassword">
              Confirm Password :
            </label>
            <input
            onChange={(e)=>setConfirmpassword(e.target.value)}
              className="form-control"
              type="password"
              id="confirmpassword"
              name="confirmpassword"
            />
          </div>
          <button>try</button>
        </div>
      </form>
      <h1>{firstName}</h1>
      <h1>{lastname}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>
      <h1>{confirmpassword}</h1>
    </div>
  );
};

export default Form;
