import "./main.css";

function Main() {
  let items = ["Chicken"];

  let itemList = items.map((item, index) => {
    return <li id={index}>{item}</li>
  });

  function printList(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get("ingredient");
    // console.log(ingredient);
    items.push(ingredient);
    console.log(itemList);
  }

  return (
    <>
      <main>
        <form className="add-ingredient-form" onSubmit={printList}>
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
          {itemList}
        </ul>
      </main>
    </>
  );
}

export default Main;
