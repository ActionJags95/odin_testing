fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/hyderabad?key=PQVYBU94BYR5JUKGMDPU3U9SR", {
  mode: "cors",
})
.then((response) => {
  return response.json();
})
.then((response) => {
  console.log(response);
})