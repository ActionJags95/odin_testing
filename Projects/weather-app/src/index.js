import "./style.css";
import setForm from "./components/dom/userFormComponent";
import getResponse from "./components/api/fetch";
import processData from "./components/dom/processData";

setForm();
// console.log(getData);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("locationForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const location = formData.get("location");

    try {
      const weatherData = await getResponse(location);
      if (weatherData === undefined) {
        throw new Error("Unable to fetch data");
      }

      processData(weatherData);
    } catch (error) {
      console.log(error);
    }
  });
});
