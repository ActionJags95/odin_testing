async function getResponse(location) {
  if(location) {
    const apiKey = process.env.API_KEY;
    const rawData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
      {
        mode: "cors",
      }
    );
    const data = await rawData.json();
    console.log(data);
    return data;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#locationForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target); 
    const location = formdata.get("location");
    getResponse(location);
  });
});

export default getResponse;
