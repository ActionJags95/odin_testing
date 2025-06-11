function test() {
  console.log(this);
}

test();


const test2 = () => {
  const name = "Jags";
  console.log(this);
};

test2();

const arr = [1,2,3,4,5];

