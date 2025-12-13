const { getAuthorById } = require("../controllers/authorController.js");

const Router = require("express");
const authorRouter = Router();

authorRouter.get("/:authorId", getAuthorById, (req, res) => {
  console.log("Out of controller");
});

module.exports = { authorRouter };
