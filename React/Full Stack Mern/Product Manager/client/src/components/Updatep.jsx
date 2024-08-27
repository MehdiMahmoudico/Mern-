import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Updatep = () => {
  const navigate = useNavigate()
  const {id} = useParams()
    const [OneProduct , setOneProduct] = useState({})
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
       .then(res=> {console.log(res.data) 
          setTitle(res.data.title)
          setPrice(res.data.price)
          setDescription(res.data.description)
        })
       .catch(err => console.error(err))
    },[id])
    const submitHandler = (e) =>{
      e.preventDefault();
      const tempObj = {title , price , description}
      axios.patch(`http://localhost:8000/api/products/${id}`,
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
        <form onSubmit={submitHandler} >
        {errors.map((err, index) => <p style={{color:'red'}} key={index}>{err}</p>)}
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input value={title} onChange={e =>{setTitle(e.target.value)}} type="text" className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input value={price} onChange={e =>{setPrice(e.target.value)}} type="number" className="form-control" id="price" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea value={description} onChange={e =>{setDescription(e.target.value)}} className="form-control" id="description" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Updatep
