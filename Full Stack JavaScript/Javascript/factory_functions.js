function person(name, age) {
  this.name = name;
  this.age = age;
  const getname = () => {
    return name;
  }

  const getAge = () => {
    return age;
  }

  return {age, getname, getAge};
}

const a = person("jags", 45)
console.log(a.getname());
console.log(a.age);
console.log(a.getAge());

const c = person("hello", 30);
console.log(c.getname());
console.log(c.age);
console.log(c.getAge());

console.log(a.getname());

const b = new person('hello', 34);
console.log(b.name);


console.log(a);
console.log(b);
console.log(c);

console.log(a.getname());
console.log(c.getname());
console.log(a.getAge());
console.log(c.getAge());

// Inheritance

function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation; // Gets the reputation of the player
  const giveReputation = () => reputation++; // Increases the reputation of the player
  const takeReputation = () => reputation--; // Decreases the reputation of the player

  return {getReputation, giveReputation, takeReputation};
}

function createPlayer(name, level) {
  const {getReputation, giveReputation, takeReputation} = createUser(name);

  const increaseLevel = () => level++; // Increases the level of the player
  const decreaseLevel = () => level--; // Decreases the level of the player

  return {name, getReputation, giveReputation, takeReputation, increaseLevel, decreaseLevel};
}

const p1 = createPlayer("jags", 3);

console.log(p1.name);
console.log(p1.getReputation());
p1.giveReputation();
p1.giveReputation();
p1.takeReputation();
console.log(p1.getReputation());

// IIFEs
// Short for Immediately Invoked Function Expressions
const calculator = (function () {
  const add = (a,b) => a+b;
  const sub = (a,b) => a-b;
  const mul = (a,b) => a*b;
  const div = (a,b) => a/b;
  return {add, sub, mul, div};
})();

calculator.add(3,5);