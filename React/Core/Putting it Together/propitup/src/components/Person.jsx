import React, {useState} from 'react'
const Person = (props) => {
    console.log(props)
  
  return (
    props.persons.map((persons, i)=> {
      return (
        <div key={i}>
          <h1>{persons.name}</h1>
          <p>Age : {persons.age}</p>
          <p>Hair Color : {persons.haircolor}</p>
          <button onClick={()=>props.newage(i)}>aaaaaaaa</button>
        </div>
      )
    }
  )
  )
}

export default Person
