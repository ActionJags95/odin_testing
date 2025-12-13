const db = require("../db.js");

async function getAuthorById(req, res, next) {
  const { authorId } = req.params;

  try {
    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
      res
        .status(404)
        .send("No author found with given id, please check the id");
    }

    res.send(`Author Name: ${author.name}`);
  } catch (err) {
    console.log("Error retrieving author ", err);
    res.status(500).send("Internal server error");
  }

  next();
}

module.exports = { getAuthorById };
