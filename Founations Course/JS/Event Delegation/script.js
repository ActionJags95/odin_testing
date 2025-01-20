// script without event delegation
const home = document.querySelector('#home');
home.addEventListener('click', () => {
    alert("Home is clicked");
})

const aboutUs = document.querySelector('#aboutUs');
aboutUs.addEventListener('click', () => {
    alert("About Us is clicked");
})

const contactUs = document.querySelector('#contactUs');
contactUs.addEventListener('click', () => {
    alert("Contact Us is clicked");
})

const support = document.querySelector('#support');
support.addEventListener('click', () => {
    alert("Support is clicked");
})

// Adds a seperate event listener to all the links for event listening
// Since each fetched link is JS object, takes of lot of space