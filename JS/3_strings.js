const string = "The revolution will not be televised";
console.log(string);

let str = "hello";
console.log(str);
str = "world";
console.log(str);

//Embedding JS

const name = "Jagruth";
const greeting = `Hello, ${name}`; // Embedding variables inside strings only works in ``
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`; // Concatenation
console.log(joined); // "Hello, how are you?"

//Converting string to number
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

// Converting number to string
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string


// String Methods
let strr = "My name is Jagruth";
console.log(strr.length); // Length of the string

let text = "HELLO WORLD";
console.log(text.charCodeAt(7)); // UTF-16 code of character at position 7
console.log(text.at(7)); // character at position 7
console.log(text.charAt(7)); // character at position 7
console.log(text[7]); // character at position 7