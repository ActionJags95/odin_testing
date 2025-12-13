import express from "express";

const app = express();

function middleware1(req, res, next) {
  console.log("In middleware 1");
  // res.send("Response from middleware-1");
  next();
}

function middleware2(req, res, next) {
  console.log("In middleware 2");
  // res.send("Response from middleware-2");
  next();
}

function middleware3(req, res) {
  console.log("In middleware 3");
  res.send("Response from middleware-3");
}

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.listen(8080, "localhost", (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log("App");
});
