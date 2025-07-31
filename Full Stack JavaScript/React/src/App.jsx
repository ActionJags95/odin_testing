import "./App.css"
import Person from "./state/person";
import Input from "./state/input";
import Accordion from "./state/shareState";
import TaskList from "./class-based/functional";
import TaskListClass from "./class-based/class";
import AssignFunctional from "./class-based/assignment/functional";
import AssignClass from "./class-based/assignment/class";
import Clock from "./side-effects/clock";
import Appi from "./side-effects/chat-room/App";

function App() {
  return (
    <>
      <Person details={{
        name: "Jags",
        age: 20,
        number: 89,
        isFavorite: true
      }}/>
      <br/>
      <Input />
      <Accordion />
      <TaskList name={"Jags"}/>
      <TaskListClass name={"Jags"}/>
      <AssignFunctional />
      <AssignClass />
      <Clock />
      <Appi />
    </>
  )
}

export default App;