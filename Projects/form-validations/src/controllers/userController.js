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

export { userListGet, userCreateGet };
