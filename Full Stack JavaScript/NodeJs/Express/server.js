import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Hello World</h1>");
});

app.get("/hello", (req, res) => {
  res.send("Hello from /hello");
});

app.all("/all", (req, res) => {
  res.send("Hello from all");
});

app.all("{*splat}", (req, res) => {
  res.send("Splat");
});

app.listen(8080, (error) => {
  if (error) {
    throw new Error(error);
  }

  console.log("App");
});
