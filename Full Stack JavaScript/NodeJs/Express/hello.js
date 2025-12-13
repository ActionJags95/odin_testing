import express from "express";

const app = express();

function middleware(req, res, next) {
  // console.log(req.url);
  if (req.url !== "/favicon.ico") {
    console.log("Inside middleware");
  }
  // res.send("Hello");

  next(); // whenever next is called inside the last middleware function, control passes onto the parent route (in this case /hello) and those functions get executed
}

app.use(middleware);

app.get("/hello", (req, res) => {
  console.log("Inside route hello");
  res.send("Hello");
});

app.listen(8080, "localhost", (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log("App");
});
