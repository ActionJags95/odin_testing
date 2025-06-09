function one(two) {
  two();
  console.log("One");
}

function two() {
  console.log("Two");
}

one(two);