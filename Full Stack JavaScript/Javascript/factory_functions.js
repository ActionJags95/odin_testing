function person(name, age) {
  this.name = name;
  this.age = age;
  const getname = () => {
    return this.name
  }

  return {age, getname}
}

const a = person("jags", 45)
console.log(a.getname());
console.log(a.age);

const b = new person('hello', 34);
console.log(b.name);