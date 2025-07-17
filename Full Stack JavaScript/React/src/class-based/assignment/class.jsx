import { Component } from "react";
import "./functional.css";

class AssignClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputTxt: "",
      editIndex: -1,
      editInput: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleEditIndexChange = this.handleEditIndexChange.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.setEditInput = this.setEditInput.bind(this);
  }

  setEditInput(input) {
    this.setState((prevState) => ({ ...prevState, editInput: input }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      todos: [...prevState.todos, prevState.inputTxt],
      inputTxt: "",
    }));
  }

  handleInputChange(event) {
    this.setState((prevState) => ({
      ...prevState,
      inputTxt: event.target.value,
    }));
  }

  handleEditInputChange(event) {
    this.setState((prevState) => ({
      ...prevState,
      editInput: event.target.value,
    }));
  }

  handleItemDelete(todoTask) {
    this.setState((prevTodos) => ({
      ...prevTodos,
      todos: this.state.todos.filter((todo) => todo !== todoTask),
    }));
  }

  handleEditIndexChange(index) {
    this.setState((prevState) => ({ ...prevState, editIndex: index }));
  }

  handleTodoChange(index) {
    let newTodo = this.state.todos;
    newTodo[index] = this.state.editInput;
    this.setState((prevTodos) => ({ ...prevTodos, todos: newTodo }));
  }

  render() {
    return (
      <section>
        <h3>List of input tasks</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo-input">Enter the task: </label>
          <input
            type="text"
            id="todo-input"
            name="todo-input"
            onChange={this.handleInputChange}
            value={this.state.inputTxt}
          />
          <button type="submit">Submit!</button>
        </form>
        <ul className="task-list">
          {this.state.todos.length > 0 &&
            this.state.todos.map((todo, index) => {
              return index === this.state.editIndex ? (
                <li key={index}>
                  <div className="tasks">
                    <input
                      type="text"
                      id="edit-todo"
                      name="edit-todo"
                      onChange={this.handleEditInputChange}
                      value={this.state.editInput}
                    />
                    <button
                      onClick={() => {
                        this.handleTodoChange(index);
                        this.handleEditIndexChange(-1);
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
                        this.handleEditIndexChange(index);
                        this.setEditInput(todo);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => this.handleItemDelete(todo)}>
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    );
  }
}

export default AssignClass;
