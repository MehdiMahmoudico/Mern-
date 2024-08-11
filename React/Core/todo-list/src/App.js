import './App.css';
import Display from './components/Display';
import Todo from './components/Todo'; 
import { useState } from 'react';
function App() {
const [list , setList] = useState([]);
const [nextId , setNextId] = useState(1)


  const addTodo = (item) => {
    setList([...list, {...item, id : nextId }]);
    setNextId(nextId + 1);
    console.log(item, nextId)
  }

  const deleteTodo = (id) => {
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  }

  return (
    <div className="App">
      <Todo addTodo = {addTodo}/>
      <Display todo = {list} deleteme = {deleteTodo}/>

    </div>
  );
}

export default App;
