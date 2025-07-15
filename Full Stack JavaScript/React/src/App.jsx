import "./App.css"
import Person from "./state/person";

function App() {
  return (
    <>
      <Person details={{
        name: "Jagruth",
        age: 20,
        number: 89,
        isFavorite: true
      }}/>
    </>
  )
}

export default App;