import Today from "./cards/today";
import ForeCast from "./cards/forecast";

function processData(data) {
  const root = document.getElementById("root"); // Getting the root element

  const {
    latitude,
    longitude,
    resolvedAddress,
    timezone,
    description,
    days,
    alerts,
  } = data;

  const todayWeather = days[0];

  const todayDiv = Today({
    latitude,
    longitude,
    resolvedAddress,
    timezone,
    description,
    alerts,
    todayWeather,
  });

  const forecastDiv = ForeCast({ days });

  root.appendChild(todayDiv);
  root.appendChild(forecastDiv);
}

export default processData;
// TODO: Split the data into required parts
// Write component for each part
