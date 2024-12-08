function favorite(object){
    let fav = object + " is my favorite";
    return fav;
}

let obj = "Hyderabadi Biriyani";
console.log(favorite(obj));

// Built-in browser functions
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join("\n");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

const myNumber = Math.random();
console.log(myNumber);
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

// Default parameter
function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
  }
  
  hello("Ari"); // Hello Ari!
  hello(); // Hello Chris!
  hello();

let name = "Jagruth"
let display_name = function() {
    console.log(name);
}
display_name(); // Another way to declare, define and use functions, also called as "Function Expressions"


function display() {
    console.log(name);
}
console.log(display);

let func = display; // copies the function display
// func = display() copies the output of the function display

func();

// function ask(question, yes, no) {
//     if (confirm(question)) yes() // Send an alert to the webpage to get user request
//     else no(); // Based on the user input, yes or no will be executed
// }

// function ifYes() {
//     console.log("I Have responded");
// }

// function ifNo() {
//     console.log("I have not responded");
// }

// ask("Have you responded", ifYes, ifNo); // Works if used alert instead of console.log   


// function sum (a, b) {
//     return a + b; // Function declaration
// }

let sum = function(a, b) {
    return a + b; // Function expression
}

console.log(sum(1, 2));

(
    function() {
        console.log("Hello");
    }
); // anonymous function


let s = (
    function() {
        console.log("hi");
    }
) // assigning anonymous function with a variable

s();