const p = new Promise((resolve, reject) => {
  if (1 + 2 == 2) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

p.then((message) => {
  console.log(message);
})
  .catch((message) => {
    console.log(`${message}, rejected`);
  })
  .finally(() => {
    console.log("Ended");
  });
