import {useState} from 'react'
import axios from 'axios';
function App() {
  const [pokemon , setPokemon] = useState([]);

  const fetshaxios = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
     .then(response => {
        setPokemon(response.data.results); 
        console.log(response.data.results); 
      })
     .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={fetshaxios}>Fetch Axios pokemons</button>
      <hr />
      {
        pokemon.map((result,i) => {
          return <h1 key={i}>{result.name}</h1>
        })
      }
    </div>
  );
}

export default App;
