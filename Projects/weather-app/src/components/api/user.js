import "./user.css";
const root = document.querySelector("#root");

function setUserInterface() {
  const form = document.createElement("form");
  form.setAttribute("id", "locationForm");

  const locationInput = document.createElement("input");
  locationInput.setAttribute("name", "location");
  locationInput.setAttribute("id", "location");
  locationInput.setAttribute("placeholder", "Enter the location: (eg: Hyderabad)");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "getLocation");
  submitBtn.textContent = "Submit";

  form.appendChild(locationInput);
  form.appendChild(submitBtn);

  root.appendChild(form);
}

export default setUserInterface;
