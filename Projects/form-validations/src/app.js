import express from "express";
import path from "node:path";
const staticAssets = "./public";
import userRouter from "./routers/userRouter.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticAssets));
app.use(express.json());
app.use("/", userRouter);

app.listen(8080, "localhost", (err) => {
  if (err) {
    throw new Error(err);
  }

  console.log("App listening on port 8080....");
});
