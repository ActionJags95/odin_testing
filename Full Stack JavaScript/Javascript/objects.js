// Objects and object constructors
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  "obnoxious property": function() {
    console.log("Hello!");
  }
};

console.log(myObject["obnoxious property"]); // getting the type of the object
myObject["obnoxious property"](); // calling the function in the object

console.log(myObject.property);

name = "obnoxious property"
myObject[name](); // referring the object items similar to array access, wont work with dot notation

// Object constructor
function Player(name, marker) {
  // new.target is meta-property that let's us know whether a function or constructor is called with the new operator or not
  // new.target = true -> call with new opeartor, else not
  if(!new.target) {
    throw Error("You must use the 'new' operator to call the function constructor"); // used to safegaurd the constructor
  }
  this.name = name;
  this.marker = marker;

  this.sayName = function() { // attaching a function object to sayName
    console.log(this.name); 
  }
}

Player.prototype.sayHello = function() { // Makes sayHello available to player1 and player2 through prototypes
  console.log("Said Hello");
}

const player1 = new Player("Jags", "X");
player1.sayName();

// const player2 = Player("alas", "O"); // no mem allocation has been done since used without new
// console.log(player2); // since mem allocation hasn't been done, return 'undefined'

console.log(Object.getPrototypeOf(player1));
console.log(Object.prototype);
console.log(Player.prototype);
console.log(Object.getPrototypeOf(Player.prototype));
player1.sayHello();

console.log(Player.prototype);





