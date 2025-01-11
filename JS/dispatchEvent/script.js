const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    alert("Click Me! is clicked");
    console.log(event.isTrusted); // Checks whether the event occured is human of system action
    // True for human action
    // False for computer action
})

let cevent = new Event('click'); // Creates a click event.
btn.dispatchEvent(cevent);
btn.dispatchEvent(cevent); // System will execute this event on behalf of the user, it is a result of computer's actions
// Once all the events are dispatched, user executed events will be considered.

// To create a new event, you use the Event constructor like this:
// let event = new Event(type, [,options]);


// By default, the options object is:
// { bubbles: false, cancelable: false}