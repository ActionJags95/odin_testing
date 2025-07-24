import "./forecast.css";
import SnippetCard from "./snippetCard";

function DailyData(props) {
  const dailyData = props.dailyData;

  const dailySection = document.createElement("section");
  dailySection.setAttribute("id", "dailySection");

  const infoText = document.createElement("p");
  infoText.textContent = "Daily Forecast";

  const dailySnippet = SnippetCard({ data: dailyData });

  dailySection.appendChild(infoText);
  dailySection.appendChild(dailySnippet);

  return dailySection;
}

function HourlyData(props) {
  const hourlyData = props.hourlyData;

  const hourlySection = document.createElement("section");
  hourlySection.setAttribute("id", "hourlySection");

  const infoText = document.createElement("p");
  infoText.textContent = "Hourly Forecast";

  const hourlySnippet = SnippetCard({ data: hourlyData });

  hourlySection.appendChild(infoText);
  hourlySection.appendChild(hourlySnippet);

  return hourlySection;
}

function ForeCast(props) {
  const dailyData = props.days;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const todayStr = today.toISOString().slice(0, 10);
  const tomorrowStr = tomorrow.toISOString().slice(0, 10);

  const todayHourData = dailyData.find((day) => day.datetime == todayStr).hours.filter((hour) => hour.datetime.split(":").at(0) >= today.getHours() - 1);
  const tomorrowHourData = dailyData.find((day) => day.datetime == tomorrowStr).hours.filter((hour) => hour.datetime.split(":").at(0) < today.getHours() - 1);

  const hourlyData = [...todayHourData, ...tomorrowHourData];

  const dailySection = DailyData({ dailyData });
  const hourlySection = HourlyData({ hourlyData });

  const forecastDiv = document.createElement("div");
  forecastDiv.setAttribute("class", "forecastDiv");

  forecastDiv.appendChild(dailySection);
  forecastDiv.appendChild(hourlySection);

  return forecastDiv;
}

export default ForeCast;
