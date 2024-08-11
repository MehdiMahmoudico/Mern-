import React from "react";
import { useState } from "react";
const Todo = (props) => {
  const { addTodo } = props;
  const [todo, setTodo] = useState("");

  const createTodo = (e) => {
    e.preventDefault();
    const newlist = { todo };
    addTodo(newlist);
    setTodo("");
  };

  return (
    <div className="container mb-3 d-flex justify-content-center">
      <form onSubmit={createTodo}>
          <input
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            value={todo}
            style={{ width: "200px", marginBottom: "20px" }}
            id="exampleInputEmail1"/>
            <button  className="btn btn-primary" type="submit">
            Add
            </button>
      </form>
    </div>
  );
};

export default Todo;
