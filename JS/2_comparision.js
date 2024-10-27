console.log("2" == 2); // only checks the value
console.log("2" === 2); // checks value as well as data type

console.log(2 === 2);
console.log("2" === "2");


console.log(4 + 4 + "1"); // first 4 gets added to 4 and becomes 8. then 8 is an integer and 1 is string, so 8 gets converted to string and gets concatenated with 1 to give 81
console.log("4" + 1); // 4 is a string and 1 is integer, 1 gets converted to integer and gets concatenated with 4 to give 41

console.log("6" - 4);
console.log(typeof("6" - 4)); // in subtraction, reverse of addition happens. That means string gets converted to integer


// Not a number NaN

console.log(typeof(NaN)); // NaN is a number
console.log(100/"Hello"); // division of number with a non-number and vice-versa gives NaN as result

let x = NaN;
let y = 11;
console.log(x + y);

//Infinity

console.log(typeof(Infinity));
console.log(8/0);

let num = 2;
while(num != Infinity){
    num *= num;
}
console.log(num);


let myNumber = 32;
console.log(myNumber.toString(32));
console.log(myNumber.toString(16));
console.log(myNumber.toString(10));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));
console.log(myNumber.toString(12));



// JS objects

let a = new Number(500);
let b = new Number(500);
console.log(a === b); // Comparing two JavaScript objects always returns false
console.log(typeof(a));
console.log(typeof(b)); 