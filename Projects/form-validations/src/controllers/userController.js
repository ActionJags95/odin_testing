import { body, validationResult, matchedData } from "express-validator";
import userStorage from "../storage/userStorage.js";
/*
 * 1. all users display page /
 * 2. create user get
 * 3. create user post
 * 4. update user get
 * 5. update user post
 * 6. delete user
 */

const userListGet = (req, res) => {
  res.render("index", {
    title: "Hello",
    users: userStorage.getAllUsers(),
  });
};

const userCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create User",
  });
};

const alphaError = "Must only contain letters";
const lengthError = "must be between 1 and 10 characters";

const validateUser = [
  body("id").isNumeric(),
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(alphaError)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First Name ${lengthError}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(alphaError)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last Name ${lengthError}`),
];

const userCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.redirect("/create");
    }

    const { id, firstName, lastName } = matchedData(req);
    userStorage.addUser(id, firstName, lastName);
    res.redirect("/");
  },
];

const userDeletePost = (req, res) => {
  const id = req.params.id;
  userStorage.deleteUser(id);
  return res.redirect("/");
};
export { userListGet, userCreateGet, userCreatePost, userDeletePost };
