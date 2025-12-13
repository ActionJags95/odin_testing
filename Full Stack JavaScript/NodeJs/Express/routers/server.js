import express from "express";
import bookRouter from "./bookRouter.js";
import authorRouter from "./authorRouter.js";

const app = express();

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.get("/about", (req, res) => {
  res.send("in the about route");
});

app.all("/contact", (req, res) => {
  res.send("In the contact route");
});

app.listen(8080, "localhost", (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log("App");
});
