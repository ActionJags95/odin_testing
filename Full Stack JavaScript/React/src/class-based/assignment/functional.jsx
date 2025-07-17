import "./functional.css";
import { useState } from "react";

function AssignFunctional() {
  const [todos, setTodos] = useState([]);
  const [inputTxt, setInputTxt] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editInput, setEditInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => [...prevTodos, inputTxt]);
    setInputTxt("");
  };

  const handleInputChange = (event) => {
    setInputTxt(event.target.value);
  };

  const handleEditInputChange = (event) => {
    setEditInput(event.target.value);
  };

  const handleItemDelete = (todoTask) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo !== todoTask));
  };

  const handleEditIndexChange = (index) => {
    console.log(index);
    setEditIndex(index);
  };

  const handleTodoChange = (index) => {
    let newTodo = todos;
    newTodo[index] = editInput;
    setTodos(newTodo);
  };

  return (
    <section>
      <h3>List of input tasks</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Enter the task: </label>
        <input
          type="text"
          id="todo-input"
          name="todo-input"
          onChange={handleInputChange}
          value={inputTxt}
        />
        <button type="submit">Submit!</button>
      </form>
      <ul className="task-list">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return index === editIndex ? (
              <li key={index}>
                <div className="tasks">
                  <input
                    type="text"
                    id="edit-todo"
                    name="edit-todo"
                    onChange={handleEditInputChange}
                    value={editInput}
                  />
                  <button
                    onClick={() => {
                      handleTodoChange(index);
                      handleEditIndexChange(-1);
                    }}
                  >
                    Resubmit
                  </button>
                </div>
              </li>
            ) : (
              <li key={index}>
                <div className="tasks">
                  <p>{todo}</p>
                  <button
                    onClick={() => {
                      handleEditIndexChange(index);
                      setEditInput(todo);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleItemDelete(todo)}>Delete</button>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default AssignFunctional;
