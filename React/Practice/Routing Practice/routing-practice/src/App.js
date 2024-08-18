import {Routes , Route , Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import Numb from './components/Numb';
function App() {

  return (
    <div className="App">
      <Link to='/Home'>Home</Link>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/:numb/:tcolor/:bcolor" element={<Detail />} />
        <Route path="/:numb" element={<Numb />} />
      </Routes>
    </div>
  );
}

export default App;
