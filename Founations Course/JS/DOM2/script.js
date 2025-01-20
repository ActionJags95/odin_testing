const buttonList = document.querySelectorAll('button');

buttonList.forEach(button => {
    button.addEventListener("click", () => {
        alert(button.textContent);
    })
});

// Page load events
document.addEventListener('DOMContentLoaded', () => {
    alert("DOM content is fully loaded");
})

document.addEventListener('load', () => {
    alert("Page is fully loaded");
})

document.addEventListener('beforeunload', () => {
    alert("Before unloading phase");
})

document.addEventListener('unload', () => {
    alert("Unloaded");
})


// Mouse events
const mouseup = document.querySelector('#mouseup');
mouseup.addEventListener('mousedown', () => {
    alert("Alerted on mouse up!");
})
// Mouse click = mouse-up + mouse-down
// Different mouse-events:
// 1. mouse-down
// 2. mouse-up
// 3. click
// 4. dblclick -> for double click
