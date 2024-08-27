import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Create from './Create'

const Main = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
       .then(res => {console.log(res.data)
                    setProducts(res.data)}
      )
       .catch(err => console.log(err))
    }, [])

    const deleteme = (id)=>{
      axios.delete(`http://localhost:8000/api/products/${id}`)
         .then(res=> {console.log(res.data)
          setProducts(products.filter(p => p._id!== id))
         })
         .catch(err => console.error(err))
      
  }
  return (
    <div>
      <Create/>
      {
        (products)?
        products.map((product) => {
          return (
            <div key={product._id}>
              <Link to={'/products/'+ product._id}><h1 className= "display-1">{product.title}</h1></Link>
              <p>Price: {product.price}</p>
              <p>Description : {product.description}</p>
              <button  onClick={()=>{deleteme(product._id)}}>Delete</button>
              <Link to={`/update/${product._id}`}>Update</Link>
            </div>
          )
        }): <h1>Loading...</h1>
      }
    </div>
  )
}

export default Main
