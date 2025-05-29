let obj = {
  name: "Jagruth",
  surname: "Pillamari",

  get fullName() {
    return `${this.name} ${this.surname}`
  }, // get and set are default functions but they can be called as object variable rather than a function call

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }

  // With get and set, fullName is a virtual property, which is readable and writable
}

console.log(obj.fullName);
for(let key in obj) console.log(key);


let user = {
  name: "John",
  surname: "Doe"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`
  },
  set(value){
    [this.name, this.surname] = value.split(" ");
  }
});
console.log(user.fullName);
for(key in user) console.log(key);


// Internal usage and data validation
let object = {
  get name() {
    return this._name;
  },
  set name(value) {
    if(value.length < 4) {
      console.log("Too short for a name. Please provide a longer one!");
      return;
    }
    this._name = value;
  }
}

object.name = "Hello"
console.log(object.name);

object.name = "A";


// Making custom properties based on the current data items

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // Implementing age property
  Object.defineProperty(this, 'age', {
    get() {
      let TodayYear = new Date().getFullYear()
      let BirthdayYear = this.birthday.getFullYear()

      return TodayYear - BirthdayYear;
    }
  });
}

let john = new User("John", new Date(2005,3,23));
console.log(john.age);
console.log(john.birthday);