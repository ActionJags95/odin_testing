import { Router } from "express";

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All authors"));

authorRouter.get("/:authorId", (req, res) => {
  res.send(req.params.authorId);
});

export default authorRouter;
