import './App.css';
import Person from './components/Person';
import { useState} from 'react';

function App() {
  
  const persons = [
    { name: 'Doe, jane ',
      age: 45,
      haircolor: 'Black',
    },
    { name: 'Smith, john ',
      age:58,
      haircolor: 'Brown', 
    },
    { name: 'Fillmore, Millard ',
      age: 50,
      haircolor: 'Brown', 
    },
    { name: 'Smith, Maria ',
      age: 62,
      haircolor: 'Brown', 
    },
  ];

  const [newage, setNewage] =useState(persons);

  const handleClicks = (n) => {
    const updateperson =  newage.map((p,i)=>{
      if (i === n){
        return {...p,age: p.age+1}
      }
      return p;
    })
    setNewage(updateperson)

    
  }
  return (
    <div className="App">
      <Person persons = {newage}
      newage = {handleClicks}
      />
    </div>
  );
}

export default App;
