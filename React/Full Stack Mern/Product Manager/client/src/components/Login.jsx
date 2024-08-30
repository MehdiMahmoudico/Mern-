import React, { useState } from 'react'
import axios from 'axios';
const Login = () => {
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempObj = {name , email , password}
        axios.post(`http://localhost:8000/register`,
            tempObj)
            .then(res=>{console.log(res.data)
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
    }



  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor='name' className="form-label">Name</label>
        <input type='text' onChange={(e)=>setName(e.target.value)} value={name} className="form-control" name="name" id="" rows="3"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor='password' className="form-label">Password</label>
        <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      
        </form>
    </div>
  )
}

export default Login
