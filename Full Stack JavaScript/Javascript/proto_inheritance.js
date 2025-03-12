function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
}


function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
}

Object.setPrototypeOf(Player.prototype, Person.prototype);

const p1 = new Player("Jags", "X");
p1.sayName();
p1.getMarker();

console.log(Object.getPrototypeOf(Player.prototype));
console.log(Person.prototype);

console.log((Object.getPrototypeOf(Player.prototype)) === (Person.prototype))