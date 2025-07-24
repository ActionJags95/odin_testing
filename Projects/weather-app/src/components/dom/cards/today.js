import "./today.css";
import markerIcon from "../../../assets/marker.svg";
import timezoneIcon from "../../../assets/timezone.svg";

function LocationDetails(props) {
  const { latitude, longitude, resolvedAddress, timezone } = props;

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

  const locationSection = document.createElement("section");
  locationSection.setAttribute("class", "locationSection");

  locationSection.appendChild(locationDiv);
  locationSection.appendChild(timezoneDiv);

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

  const weatherIcon = document.createElement("img");
  weatherIcon.src = require(`../../../assets/weather-icons/${todayWeather.icon}.svg`);
  weatherIcon.setAttribute("id", "weatherIcon");

  const tempDiv = document.createElement("div");
  tempDiv.setAttribute("id", "tempDiv");

  tempDiv.innerHTML = `
    <p>Temperature: ${todayWeather.temp}</p>
    <p>Feels like: ${todayWeather.feelslike}</p>
    <p>Max: ${todayWeather.tempmax}</p>
    <p>Min: ${todayWeather.tempmin}</p>
  `;

  weatherDiv.appendChild(weatherIcon);
  weatherDiv.appendChild(tempDiv);

  const weatherDescription = document.createElement("p");
  weatherDescription.setAttribute("id", "weatherDescription");
  weatherDescription.textContent = todayWeather.description;

  weatherSection.appendChild(weatherDiv);
  weatherSection.appendChild(weatherDescription);

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
  });
  const weatherElem = WeatherDetails({
    description,
    alerts,
    todayWeather,
  });

  const todayDiv = document.createElement("div");
  todayDiv.setAttribute("class", "todayDiv");
  todayDiv.appendChild(locationElem);
  todayDiv.appendChild(weatherElem);

  return todayDiv;
}

export default Today;
