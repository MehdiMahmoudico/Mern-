import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Walker = (props) => {
const [starwar , setStarwar] =  useState('');
const [idstar, setIdstar] = useState();
const nav = useNavigate();
const handle = ()=>{  
  props.starwar(starwar, idstar)
  nav(`/${starwar}/${idstar}`);
  setStarwar('')
  setIdstar()
  
};
const isValidNumber = !isNaN(Number(idstar));

  return (
    <>


    <div className="container  d-flex justify-content-center ">
      <form onSubmit={handle}>
        <div className='d-flex align-items-center '>
          <div  >
            <label htmlFor="sele">Search For:</label>
          <select
            onChange={(e)=>setStarwar(e.target.value)}
            className=" form-select "
            id="sele"
            aria-label="Large select example">
            <option >Open this select menu</option>
            <option value="planets">planets</option>
            <option value="people">people</option>
            <option value="films">films</option>
          </select>
          </div><br />
          <div  style={{marginLeft:'20px'}}>
            <label htmlFor="id">Id:</label>
            <input onChange={(e)=>setIdstar(e.target.value)} id="id" type="text" className="form-control" />
            
          </div><br /> 
          <div style={{marginLeft:'20px', marginTop:'20px'}}>
          {isValidNumber? (
          <button   className="  btn btn-primary">Search</button>):
          <Link to={"/"}><button   className="  btn btn-primary">Search</button></Link>
        }</div>  
        </div>
        
      </form>
    </div>
    </>
  );
};

export default Walker;
