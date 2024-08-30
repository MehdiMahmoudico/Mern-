import { Routes , Route , Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Authors from './components/Authors';
import Updatep from './components/Updatep';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/authors/new' element = {<Authors/>}/>
      <Route path='/authors/:id' element = {<Updatep/>}/>
    </Routes>
    </div>
  );
}

export default App;
