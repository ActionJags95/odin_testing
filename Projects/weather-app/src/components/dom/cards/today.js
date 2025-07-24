import "./today.css";
import markerIcon from "../../../assets/marker.svg";
import timezoneIcon from "../../../assets/timezone.svg";

function LocationDetails(props) {
  const { latitude, longitude, resolvedAddress, timezone, todayWeather } =
    props;

  // Location Name section
  const locationDiv = document.createElement("div");
  locationDiv.setAttribute("class", "locationDiv");

  const markerImg = document.createElement("img");
  markerImg.src = markerIcon;
  markerImg.setAttribute("id", "markerIcon");

  const locationName = document.createElement("p");
  locationName.setAttribute("id", "locationName");
  locationName.textContent = resolvedAddress;

  locationDiv.appendChild(markerImg);
  locationDiv.appendChild(locationName);

  // timezone Section
  const timezoneDiv = document.createElement("div");
  timezoneDiv.setAttribute("class", "timezoneDiv");

  const timezoneText = document.createElement("p");
  timezoneText.textContent = timezone;
  timezoneText.setAttribute("id", "timezoneText");

  const timezoneImg = document.createElement("img");
  timezoneImg.src = timezoneIcon;
  timezoneImg.setAttribute("id", "timezoneIcon");

  timezoneDiv.appendChild(timezoneImg);
  timezoneDiv.appendChild(timezoneText);

  // Temp Stat
  const weatherIcon = document.createElement("img");
  weatherIcon.src = require(`../../../assets/weather-icons/${todayWeather.icon}.svg`);
  weatherIcon.setAttribute("id", "weatherIcon");

  const temp = document.createElement("p");
  temp.setAttribute("id", "tempText");
  temp.textContent = todayWeather.temp;

  const tempStatDiv = document.createElement("div");
  tempStatDiv.setAttribute("class", "tempStatDiv");
  tempStatDiv.appendChild(weatherIcon);
  tempStatDiv.appendChild(temp);

  // Weather description
  const weatherDesc = document.createElement("p");
  weatherDesc.setAttribute("id", "weatherDesc");
  weatherDesc.textContent = todayWeather.description;

  const locationSection = document.createElement("section");
  locationSection.setAttribute("class", "locationSection");
  locationSection.appendChild(locationDiv);
  locationSection.appendChild(timezoneDiv);
  locationSection.appendChild(tempStatDiv);
  locationSection.appendChild(weatherDesc);

  return locationSection;
}

function WeatherDetails(props) {
  const { description, alerts, todayWeather } = props;

  const weatherSection = document.createElement("section");
  weatherSection.setAttribute("class", "weatherSection");
  console.log(todayWeather);
  console.log(description);
  console.log(alerts);

  const weatherDiv = document.createElement("div");
  weatherDiv.setAttribute("class", "weatherDiv");

  weatherDiv.innerHTML = `
    <p>Feels Like: ${todayWeather.feelslike}</p>
    <p>Max: ${todayWeather.tempmax}</p>
    <p>Min: ${todayWeather.tempmin}</p>
    <p>Pressure: ${todayWeather.pressure}</p>
    <p>Humidity: ${todayWeather.humidity}</p>
    <p>UV Index: ${todayWeather.uvindex}</p>
  `;

  weatherSection.appendChild(weatherDiv);

  return weatherSection;
}

function Today(props) {
  const {
    latitude,
    longitude,
    resolvedAddress,
    timezone,
    description,
    alerts,
    todayWeather,
  } = props;

  const locationElem = LocationDetails({
    latitude,
    longitude,
    resolvedAddress,
    timezone,
    todayWeather,
  });
  const weatherElem = WeatherDetails({
    description,
    alerts,
    todayWeather,
  });

  locationElem.appendChild(weatherElem);

  const todayDiv = document.createElement("div");
  todayDiv.setAttribute("class", "todayDiv");
  todayDiv.appendChild(locationElem);

  return todayDiv;
}

export default Today;
