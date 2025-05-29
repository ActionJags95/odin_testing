class User {
  constructor(name, birthday) {
    this._name = name;
    this._birthday = birthday;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  sayHi() {
    return this._name;
  }
}

console.log(User);
console.log(User.prototype); // by Default, class sets the enumerable flag to false for all its methods. So not displayed in console

console.log(Object.getOwnPropertyNames(User.prototype));


const user = new User("Jagruth", new Date(2005,3,23));
console.log(user.sayHi());
console.log(user.name);
user.name = "Jags";
console.log(user.name);



class Point {
  #height = 0;
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  static displayname = "Point"
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }


}

let a = new Point(1,2);
let b = new Point(2,1);

console.log(Point.displayname);
console.log(Point.distance(a,b))
// console.log(a.#height); -> Private variables

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
  walk() {
    console.log(`${this.name} walks`);
  }
}
class Species {
  constructor(name) {
    this.name = name;
  }
  sayMyName() {
    console.log(this.name);
  }
}
class Dog extends Animal { // Multiple inheritance in not a feature
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const tommy = new Dog("Tommy");
tommy.walk();
