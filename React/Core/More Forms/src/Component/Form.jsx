import React from "react";
import "./Form.css";
import { useState } from "react";
const Form = () => {
  const [firstName,setFirstName] = useState('');
  const [lastname,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setConfirmpassword] = useState('');
  const [title, setTitle] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [title4, setTitle4] = useState('');
  const [title5, setTitle5] = useState('');
const validationname = (e) => {
  setFirstName(e.target.value);
  if (e.target.value.length < 2){
    setTitle("First Name must be at least 2 characters ");
  } else {
    setTitle("")}
}
const validationlastname = (e) => {
  setLastName(e.target.value);
  if (e.target.value.length < 2){
    setTitle2("Last Name must be at least 2 characters ");
  } else {
    setTitle2("")}
}
const validationemail = (e) => {
  setEmail(e.target.value);
  if (e.target.value.length < 5){
    setTitle3("Email must be at least 5 characters ");
  } else {
    setTitle3("")}
}
const validationpassword = (e) => {
  setPassword(e.target.value);
  if (e.target.value.length < 5){
    setTitle4("password must be at least 8 characters ");
  } else if (e.target.value != confirmpassword){
    setTitle4("Passwords do not match ");
    setTitle5("Passwords do not match ");
  }
  else {
    setTitle4("")}
}
const validationconfirmpassword = (e) => {
  setConfirmpassword(e.target.value);
  if (e.target.value.length < 5){
    setTitle5("password must be at least 8 characters ");
  } else if (e.target.value != password){
    setTitle4("Passwords do not match ");
    setTitle5("Passwords do not match ");
  }
  else {
    setTitle4("")
    setTitle5("")
  }
}
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} >
        <div className="container col-2">
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="firstname">
              First Name:
            </label>
            <input type="text" onChange={validationname} className="form-control"  id="firstname" name="firstname"
            />
            {title ? <p>{title}</p>:""}
          </div>
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="lastname">
              Last Name:
            </label>
            <input
              onChange={validationlastname}
              className="form-control"
              type="text"
              id="lastname"
              name="lastname"
            />
            {title2 ? <p>{title2}</p>:""}
          </div>
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              onChange={validationemail}
              className="form-control"
              type="email"
              id="email"
              name="email"
            />
            {title3 ? <p>{title3}</p>:""}
          </div>
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              onChange={validationpassword}
              className="form-control"
              type="password"
              id="password"
              name="password"
            />
            {title4 ? <p>{title4}</p>:""}
          </div>
          <div className="form-group mb-5">
            <label className="form-label" htmlFor="confirmpassword">
              Confirm Password :
            </label>
            <input
            onChange={validationconfirmpassword}
              value={confirmpassword}
              className="form-control"
              type="password"
              id="confirmpassword"
              name="confirmpassword"
            />
            {title5 ? <p>{title5}</p>:""}
          </div>
          {
                title ?
                <input type="submit" value="Submit" disabled /> : 
                <input type="submit" value="Submit" />
            }
        </div>
      </form>
    </div>
  );
};

export default Form;
