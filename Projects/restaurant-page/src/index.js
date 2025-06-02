import "./style.css"
import HomeTab from "./tabs/home"
import AboutTab from "./tabs/about";
import MenuTab from "./tabs/menu";

const contentArea = document.querySelector('#content');
const nav = document.querySelector('#selector');
console.log(nav);


nav.addEventListener('click', (event) => {
  let id = event.target.id;
  contentArea.innerHTML = "";
  switch(id) {
    case "home":
      HomeTab(contentArea);
    break;

    case "menu":
      MenuTab(contentArea);
    break;

    case "about":
      AboutTab(contentArea);
    break;
  }
})