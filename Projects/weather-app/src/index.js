import "./style.css";
import setForm from "./components/api/user";
import getResponse from "./components/api/fetch";
import processData from "./components/dom/processData";
import getLoader from "./components/dom/loading";

setForm();
// console.log(getData);
const weatherData = await getResponse();

processData(weatherData);
