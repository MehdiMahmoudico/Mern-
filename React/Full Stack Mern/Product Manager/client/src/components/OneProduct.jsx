import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const OneProduct = () => {
    const {id} = useParams()
    const [OneProduct , setOneProduct] = useState({})
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products/${id}`)
       .then(res=> {console.log(res.data) 
                    setOneProduct(res.data)})
       .catch(err => console.error(err))
    },[id])

  return (
    <div>
            <div key={OneProduct._id}>
              <h1 className= "display-1">{OneProduct.title}</h1>
              <p>Price: {OneProduct.price}</p>
              <p>Description : {OneProduct.description}</p>
              
            </div>
    </div>
  )
}

export default OneProduct
