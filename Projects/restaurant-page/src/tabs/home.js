import './home.css'

function HomeTab(contentArea) {
  const homeDiv = document.createElement('div');
  homeDiv.setAttribute('class', 'home');


  const welcomeText = document.createElement('h1');
  welcomeText.textContent = "Welcome to Pillamari's Coffee!";
  welcomeText.setAttribute('class', 'welcome-text');

  


  homeDiv.appendChild(welcomeText);
  contentArea.appendChild(homeDiv);
}

export default HomeTab;