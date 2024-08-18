import "./App.css";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Walker from './components/Walker'
import { useState } from "react";
import OneWalker from "./components/OneWalker";
import Nothing from "./components/Nothing";

function App() {


const [onestar , setOnestar]= useState()
const [id , setId]= useState()

  const handlestar = (starwar,idstar)=>{ 
    setOnestar(starwar)
    setId(idstar)
    
    console.log(starwar,idstar)
  };  








  return (
    <div className="App ">
      <Walker starwar = {handlestar}/>
      <Routes>
        <Route path="/" element= {<Nothing />} />
        <Route path="/:star/:id" element=  {<OneWalker onestar = {onestar} id = {id} />} />
      </Routes>
    </div>
  );
}

export default App;
