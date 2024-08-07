import './App.css';
import Formbox from './components/Formbox';
import { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  return (
    <div className="App">
      <Formbox addBox={addBox} />
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              width: box.width+'px',
              height: box.height+'px',
              backgroundColor: box.color,
              margin: '5px'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;