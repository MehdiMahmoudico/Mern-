import React from 'react'

const Person = (props) => {
    console.log(props)

  return (
    <div>
      <h1>{props.fname}</h1>
      <p>Age : {props.age}</p>
      <p>Hair Color : {props.color}</p>
    </div>
  )
}

export default Person
