import express from "express";

const app = express();

app.set("views", "./views/");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "Hello EJS" });
});

app.listen(8080, "localhost", (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log("App");
});
