import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Main = () => {
    const [authors, setAuthors] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
         .then(res => {console.log(res.data)
            setAuthors(res.data)})
         .catch(err => console.log(err))
    },[])
    const deleteme = (id)=>{
        axios.delete(`http://localhost:8000/api/authors/${id}`)
           .then(res=> {console.log(res.data)
            setAuthors(authors.filter(p => p._id!== id))
           })
           .catch(err => console.error(err))
        
    }
  return (
    <div className='container'>
        <Link to={"/authors/new"}>Create New Author</Link>
            {
        (authors)?
        authors.map((author) => {
          return (
            <div key={author._id}>
                <div
                    class="table-responsive"
                >
                    <table
                        class="table table-primary"
                    >
                        <thead>
                            <tr>
                                <th scope="col">Author</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="">
                                <td scope="row">{author.name}</td>
                                <td><Link to={'/authors/'+ author._id}><p>Edit</p></Link><Link  onClick={()=>{deleteme(author._id)}}>Delete</Link></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                
              
              {/* <button  onClick={()=>{deleteme(author._id)}}>Delete</button> */}
              {/* <Link to={`/update/${author._id}`}>Update</Link> */}
            </div>
          )
        }): <h1>Loading...</h1>
      }
    </div>
  )
}

export default Main
