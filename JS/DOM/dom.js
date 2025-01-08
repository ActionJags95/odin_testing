    const container = document.querySelector('#container');

    const display = container.firstElementChild; // Selects the first child of element with id container
    const controls = container.lastElementChild; // Selects the last child of element with id container
    
    const controls2 = document.querySelector('.controls');
    const display2 = controls2.previousElementSibling; // Get the Element which is sibling to the current element and present before the current element

    console.log(display);

    function alertPage() {
        alert("DOM content loaded")
    }
    // addEventListener('DOMContentLoaded', alertPage) // DOMContentLoaded event occurs after deferred scripts are ready to executed and starts thier execution
    // Deferred scirpts waits for CSS style-sheets to be loaded


    const p = document.createElement('p');
    p.setAttribute('style', 'color: red; font-size: 40px');
    p.textContent = "Hey! I'm red"
    display.append(p);


    const btn = document.querySelector('#btn'); // Fetching the button with id 'btn'
    btn.onclick = () => alert("Alert from script"); // Adding a condition on the button when the predefined event 'onclick' occurs

    const hello = document.querySelector('#hello'); // Fetching the button with id 'hello'
    hello.addEventListener('click', () => {
        alert("Hello World!"); // Adding an event listener, which listens for the event 'click' and execute the arrow function
    })