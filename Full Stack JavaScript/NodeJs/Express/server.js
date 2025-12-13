import express from "express";

const app = express();

// NOTE: Browser makes two requests to the server whenever the app loads
// One is to the requested route (from the url paramters) and another is to load the tab icon (one that displayed beside the title of the tab)
// So the requests made are
// 1. required route
// 2. /favicon.ico
// This is main reason, for double execution of the console.log statement whenever middleware is used

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Hello World</h1>");
});

app.get("/hello", (req, res) => {
  res.send("Hello from /hello");
});

app.get("/:username/:time/hello", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.get("/redirect", (req, res) => {
  res.redirect("https://www.google.com");
});

app.all("/all", (req, res) => {
  res.send("Hello from all");
});

app.post("/hello", (req, res) => {
  res.send("Sending you a hello");
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
