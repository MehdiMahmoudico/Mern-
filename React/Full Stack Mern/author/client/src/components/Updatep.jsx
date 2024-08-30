import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams , Link} from 'react-router-dom';

const Updatep = () => {

    const {id} = useParams()
      const [OneAuthor , setOneAuthor] = useState({})
      const [name, setName] = useState("");
      const [errors, setErrors] = useState([]);
      const navigate = useNavigate();
      const cancel = () => {navigate('/');}
      useEffect(()=> {
          axios.get(`http://localhost:8000/api/authors/${id}`)
         .then(res=> {console.log(res.data) 
            setName(res.data.title)
          })
         .catch(err => console.error(err))
      },[id])
      const submitHandler = (e) =>{
        e.preventDefault();
        const tempObj = {name}
        axios.patch(`http://localhost:8000/api/authors/${id}`,
            tempObj)
            .then(res=>{console.log(res.data)
              navigate("/")
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
    <Link to={"/"}>Home</Link>
          <form onSubmit={submitHandler} >
          {errors.map((err, index) => <p style={{color:'red'}} key={index}>{err}</p>)}
              <div className="mb-3">
                  <label htmlFor="title" className="form-label">Name</label>
                  <input value={name} onChange={e =>{setName(e.target.value)}} type="text" className="form-control" id="title" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <button  onClick={cancel} type="submit" className="btn btn-primary">cancel</button>
      </div>
    )
  }

export default Updatep
