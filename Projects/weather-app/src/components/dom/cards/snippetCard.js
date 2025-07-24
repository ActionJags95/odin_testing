import "./snippetCard.css"

function SnippetCard({ data }) {
  console.log(data);
  const snippetCards = data.map((item) => {
    // datetime, temp, icon
    const card = document.createElement("div");
    card.setAttribute("class", "snippetCard");

    

    return card;
  });

  const snippetContainer = document.createElement("div");
  snippetContainer.setAttribute("class", "snippetContainer")

  snippetCards.forEach(card => {
    snippetContainer.appendChild(card);
  });

  return snippetContainer;
}

export default SnippetCard;