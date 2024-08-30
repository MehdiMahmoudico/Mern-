
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Main from './components/Main';
import OneProduct from './components/OneProduct';
import Updatep from './components/Updatep';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <h1>Products</h1>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/products/:id' element = {<OneProduct/>}/>
      <Route path='/update/:id' element = {<Updatep/>}/>
      <Route path='/registeruser' element = {<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
