import './App.css';
import Display from './Component/Display';
import Form from './Component/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
const [user , setUser] = useState("");
const adduser = (myuser) => {
  setUser(myuser);
  console.log(myuser)
}
  return (
    <div className="App">
      <Form addme = {adduser}/>
      <Display muser ={user}/>
    </div>
  );
}

export default App;
