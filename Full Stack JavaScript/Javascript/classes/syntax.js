class User {
  constructor(name, birthday) {
    this._name = name;
    this._birthday = birthday;

    // Setting the age property
    Object.defineProperty(this, 'age', {
      get() {
        const ThisYear = new Date().getFullYear();
        return ThisYear - this._birthday.getFullYear();
      }
    });
  }

  getAge() {
    return this._birthday;
  }

  sayHi() {
    console.log(this._name);
  } // no need to use the function keyword

  // function sayHi() {
  //   console.log(this._name);
  // } --> error because by default methods are created in the class's prototype, so no need of explicit declaration as in prototypes

}

const jags = new User("Jags", new Date(2005, 3, 23));

jags.sayHi();
console.log(jags.age);

console.log(typeof(User)); // outputs function
// What class User {...} construct really does is:

// Creates a function named User, that becomes the result of the class declaration. 
// The function code is taken from the constructor method (assumed empty if we don’t write such method).
// Stores class methods, such as sayHi, in User.prototype.


console.log(User.prototype); // Empty object
// IMPORTANT
/*
Node.js prints only properties of the object that are enumerable
That means console.log() will print the properties that are it's own and they can be iterated

* By default, class methods are non-enumerable, they are not shown in console.log()
To display the members of the class we user Object.getOwnPropertyNames method


During the declaration of methods JavaScript does something like this:
Object.defineProperty(User.prototype, 'sayHi', {
  value: function() { console.log("Hi"); },
  enumerable: false
});

That means, Property is there, but it is hidden when object is accessed
To access the property, we need to specifically call the property
*/

console.log(Object.getOwnPropertyNames(User.prototype));

