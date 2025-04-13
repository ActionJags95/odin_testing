function makeAdding(firstNumber) {
  const first = firstNumber;
  return function resulting(secondNumber) {
    const second = secondNumber;
    return first + second;
  }
}

const add5 = makeAdding(5)

console.log(add5(3));

// add5 is a closure
// A closure is the combination of a function and its surrounding also called as lexical environment 