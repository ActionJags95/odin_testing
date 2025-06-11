const sayHello = (name) => `Hello, ${name}!`;

console.log(sayHello("Jagruth"));

const obj = {
  name: "Jags",
  sayHello: function () {
    console.log(this.name);
  },
};

console.log(obj.sayHello);
let sayHi = obj.sayHello;
console.log(sayHi);

obj.sayHello();
sayHi();

let obj2 = {
  name: "Jagruth",
  sayHello: () => {
    console.log(this.name);
  },
};

let sayHi2 = obj2.sayHello;
console.log(obj.sayHello);
console.log(sayHi2);

obj.sayHello();
sayHi2();

let person = {
  name: "Jagruth",
  regFun: function () {
    console.log(this.name);
  },
  arrowFun: () => {
    console.log(this.name);
  },
};

person.regFun();
person.arrowFun();
