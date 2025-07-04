import "./loading.css";

function Loader() {
  const root = document.querySelector("#root");
  const overlay = document.createElement("div");
  overlay.setAttribute("class", "overlay");
  const loader = document.createElement("div");
  loader.setAttribute("class", "loadAnim");

  overlay.appendChild(loader);
  root.appendChild(overlay);
  const toggleOn = () => {
    overlay.style.display = "flex";
  };
  const toggleOff = () => {
    overlay.style.display = "none";
    root.removeChild(overlay);
  };

  return { toggleOn, toggleOff };
}

export default Loader;
