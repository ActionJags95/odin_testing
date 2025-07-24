import "./snippetCard.css";

function SnippetCard({ data }) {
  console.log(data);
  const snippetCards = data.map((item) => {
    // datetime, temp, icon
    const card = document.createElement("div");
    card.setAttribute("class", "snippetCard");

    const { datetime, temp, icon } = item;
    const today = new Date();
    if (
      datetime.split(":").at(0) == today.getHours() ||
      datetime.split("-").at(2) == today.getDate()
    )
      card.setAttribute("class", `${card.getAttribute("class")} current`);

    const datetimeText = document.createElement("p");
    datetimeText.setAttribute("class", "datetimeText");
    datetimeText.textContent = datetime;

    const weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("class", "forecastIcon");
    weatherIcon.src = require(`../../../assets/weather-icons/${icon}.svg`);

    const tempText = document.createElement("p");
    tempText.setAttribute("class", "tempText");
    tempText.textContent = temp;

    card.appendChild(datetimeText);
    card.appendChild(weatherIcon);
    card.appendChild(tempText);

    return card;
  });

  const snippetContainer = document.createElement("div");
  snippetContainer.setAttribute("class", "snippetContainer");

  snippetCards.forEach((card) => {
    snippetContainer.appendChild(card);
  });

  const weatherContainer = document.createElement("div"); // so to wrap snippetContainer in it
  weatherContainer.setAttribute("class", "weatherContainer");

  weatherContainer.appendChild(snippetContainer);

  return weatherContainer;
}

export default SnippetCard;
