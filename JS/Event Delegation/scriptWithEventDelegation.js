const homePage = document.querySelector('.homePage');
homePage.addEventListener('click', () => {
    let target = event.target;

    switch(target.id) {
        case "home":
            alert("Home is clicked");
        break;

        case "aboutUs":
            alert("About Us is clicked");
        break;

        case "contactUs":
            alert("Contact Us is clicked");
        break;

        case "support":
            alert("Support is clicked");
        break;

        default:
            alert("Invalid link");
        break;
    }
})

// Uses the parent element to listen for events. Using event.target, we can get the target event that occured and fetch it's id from it.
// This helps to save memory.