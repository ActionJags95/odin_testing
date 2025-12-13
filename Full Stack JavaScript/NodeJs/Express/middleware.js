import express from "express";
import sayHello from "./function.js";

const app = express();

function middleware(req, res, next) {
  console.log("Middleware function called...");
  req.customProperty = "My custom property";

  next(sayHello());
}

app.use(middleware);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/hello", (req, res) => {
  res.send("Hi there");
});

app.listen(3000, "localhost", (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log("App");
});
