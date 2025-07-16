import { Component } from "react";

class TaskListClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      todos: [...prevState.todos, prevState.inputVal],
      inputVal: "",
    }));
  }

  handleInputChange(event) {
    this.setState((prevState) => ({
      ...prevState,
      inputVal: event.target.value,
    }));
  }

  handleRemoval(reqTodo) {
    this.setState((prevState) => ({
      ...prevState,
      todos: prevState.todos.filter((todo) => todo !== reqTodo),
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            name="task-entry"
            onChange={this.handleInputChange}
            value={this.state.inputVal}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks (click on them to remove)</h4>
        <ul>
          {this.state.todos.length > 0 &&
            this.state.todos.map((todo, index) => {
              return (
                <li key={index} onClick={() => this.handleRemoval(todo)}>
                  {todo}
                </li>
              );
            })}
        </ul>
      </section>
    );
  }
}

export default TaskListClass;
