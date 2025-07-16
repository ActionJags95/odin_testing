import { useState } from "react";

function TaskList({ name }) {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => [...prevTodos, inputVal]);
    setInputVal("");
  };

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  };

  const handleRemoval = (reqTodo) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo !== reqTodo);
    });
  };

  return (
    <section>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="task-entry"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>List of all tasks (Click on a task to remove it)</h4>
      <ul>
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  handleRemoval(todo);
                }}
              >
                {todo}
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default TaskList;
