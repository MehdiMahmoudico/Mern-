import React from "react";

const Display = (props) => {
  return (
    <div>
      {props.todo.map((lists) => (
        <span key={lists.id}>
          <h1>
            {lists.todo}{" "}
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>{" "}
            <button
              className="btn btn-danger"
              onClick={() => props.deleteme(lists.id)}
            >
              Delete
            </button>
          </h1>
        </span>
      ))}
    </div>
  );
};

export default Display;
