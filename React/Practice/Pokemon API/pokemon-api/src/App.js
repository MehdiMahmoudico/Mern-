import {useState} from 'react'
function App() {
  const [pokemon , setPokemon] = useState([]);
  const fetchpok = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.json())
      .then(newresponse => {
        setPokemon(newresponse.results); 
        console.log(newresponse.results); 
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={fetchpok}>Fetch pokemons</button>
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
