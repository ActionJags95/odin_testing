import Loader from "../dom/loading";

async function getResponse(location) {
  if (!location) {
    console.warn("No location provided to getResponse()");
    return undefined;
  }

  const loader = Loader();
  loader.toggleOn();

  location = location.toLowerCase();
  const apiKey = process.env.API_KEY;
  console.log(apiKey);

  try {
    const rawData = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`,
      {
        mode: "cors",
      }
    );

    if(!rawData.ok) {
      throw new Error("Cannot get data from API, status: ",rawData.status);
    }

    const data = await rawData.json();
    loader.toggleOff();
    document.getElementById("root").innerHTML = "";

    return data;

  } catch (error) {
    console.log("Unable to fetch data:", error);
    loader.toggleOff();
    return undefined;
  } finally {
    console.log("Finished execution of getResponse()");
  }
}

export default getResponse;
