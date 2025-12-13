const express = require("express");
const { authorRouter } = require("./routers/authorRouter.js");

const app = express();

app.use("/author", authorRouter);

app.listen(8080, "localhost", (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log("app");
});
