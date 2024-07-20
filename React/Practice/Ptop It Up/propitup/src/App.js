import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
function App() {
  const person = {
    n1 : 'Doe, Jane',
    n2 : 'Smith, John',
    n3 : 'Fillmore, Millard',
    n4 : 'Smith, Maria',
  }
  const age = {
    a1 : 45,
    a2 : 88,
    a3 : 50,
    a4 : 62,
  };
  const color = {
    c1 : 'Black',
    c2 : 'Brown',
  };

  return (
    <div className="App">
      <Person fname = {person.n1}
      age = {age.a1}
      color = {color.c1}/>
      <Person fname = {person.n2}
      age = {age.a2}
      color = {color.c2}/>
      <Person fname = {person.n3}
      age = {age.a3}
      color = {color.c2}/>
      <Person fname = {person.n4}
      age = {age.a4}
      color = {color.c2}/>
    </div>
  );
}

export default App;
