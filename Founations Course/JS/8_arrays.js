const cars = ["Seltos", "Creta", "XUV700"]; 
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]); // Out of bound, prints undefined into the console
console.log(cars); // Prints the entire array into the console

const services = new Array("Massage", "BlowDry", "FullCheckUp"); // Dynamic Allocation
console.log(services[0]);
console.log(services[1]);
console.log(services[2]);

let concat = services.toString(); // Joins the array elements into a string with delimiter ','
console.log(concat);

let con = services.join("-") // Joins the array into a string, Default delimiter is ','
console.log(con);

console.log(typeof(cars)); // In JS arrays are objects
const person = {
    name: "Jagruth",
    age: 18,
    class: "A"
}

console.log(person.class);


console.log(cars.length) // Returns the size of the array

cars.sort(); // Sorts the array
console.log(cars);

cars.push("Sonet") // Pushes the elements to the end of the array
console.log(cars);

const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits

// fruits[7] = "Guava";
// console.log(fruits); // Output - [ 'Banana', 'Orange', 'Apple', 'Lemon', <3 empty items>, 'Guava' ]

const points = [40];
console.log(points);

const points2 = new Array(40); // Initialises an empty array of size 40
console.log(points2);
points2[0] = 1;
points2[39] = 1;
console.log(points2);

console.log(Array.isArray(fruits)); // checks whether the given object is array or not


// Array methods
console.log(cars.at(2));

fruits.pop();
console.log(fruits); // All the empty items before the last elements also get popped since out of bound declaration

points2.pop();
console.log(points2);
console.log(points2[14]); // Empty items are undefined items

