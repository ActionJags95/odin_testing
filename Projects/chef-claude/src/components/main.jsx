import { useState } from "react";
import "./main.css";

function Main() {
  let [items, setList] = useState([]);

  function addToLIst(event) {
    event.preventDefault(); // Preventing reload on submit

    // Getting the value from the input element
    const listInput = document.querySelector("#list-item");
    const item = listInput.value;
    listInput.value = "";
    // Validity checking
    if(item == "") {
      alert("Enter a valid item name");
      return;
    }

    // Updating the state element (itemList)
    setList((prevItems) => {
      return [...prevItems, item]; 
      // Callback gives the previous value of the state before the form submission, as the variable name suggests
      // ... is the spread operator. Using array destructuring property, we are returning the new array with new element
      // In react, the state variable should not be modified directly, rather should be done through callbacks and return values
    });
  }

  return (
    <>
      <main>
        <form className="add-ingredient-form" onSubmit={addToLIst}>
          <input
            id="list-item"
            type="text"
            aria-label="Add ingredients"
            placeholder="e.g. oregano"
            name="ingredient"
          />
          <button id="submit-btn" type="submit">
            Add ingredient
          </button>
        </form>
        <ul>
          {/* Rendering the items array to a HTML list */}
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </main>
    </>
  );
}

export default Main;
