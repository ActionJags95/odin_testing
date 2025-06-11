const obj = {
  name: "Jags",
  sayHello: function () {
    console.log(this.name);
  },
  sayHi: () => {
    console.log(this.name);
    console.log(this);
    // console.log(name);
  }
};

obj.sayHi();
let sayHi = obj.sayHello;

function f(callback) {
  this.name = "Jagruth";
  callback();
}


f(sayHi);
f(obj.sayHi);