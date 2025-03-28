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
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;
  const takeReputation = () => reputation--;

  return {getReputation, giveReputation, takeReputation};
}

function createPlayer(name, level) {
  const {getReputation, giveReputation, takeReputation} = createUser(name);

  const increaseLevel = () => level++;
  const decreaseLevel = () => level--;

  return {name, getReputation, giveReputation, takeReputation, increaseLevel, decreaseLevel};
}

const p1 = createPlayer("jags", 3);

console.log(p1.name);
console.log(p1.getReputation());
p1.giveReputation();
p1.giveReputation();
p1.takeReputation();
console.log(p1.getReputation());
