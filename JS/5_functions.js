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