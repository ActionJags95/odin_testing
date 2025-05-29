function User(name, birthday) {
  this._name = name;
  this._birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      let TodayYear = new Date().getFullYear();
      let BirthdayYear = this._birthday.getFullYear();
      return TodayYear - BirthdayYear;
    }
  })

  Object.defineProperty(this, 'name', {
    get() {
      return this._name;
    },
    set(value) {
      if(Number.isInteger(Number.parseInt(value[0]))) {
        throw Error("Names must start with letter");
      }

      this._name = value;
    }
  })
}

let user = new User("jags", new Date(2005,3,23));
console.log(user.age);

console.log(user.name)
user.name = "Jags"
console.log(user.name)

