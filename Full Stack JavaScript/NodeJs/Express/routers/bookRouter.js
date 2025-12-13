import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("all books");
});

bookRouter.get("/:bookID", (req, res) => {
  res.send(`Id of the book is ${req.params.bookID}`);
});

bookRouter.get("/:bookID/reserve", (req, res) => {
  res.send(`In the reserve section of get route of book ${req.params.bookID}`);
});

bookRouter.post("/:bookID/reserve", (req, res) => {
  res.send(`In the reserve section of post route of book ${req.params.bookID}`);
});

export default bookRouter;
