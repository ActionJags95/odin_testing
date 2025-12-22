/*
 * 1. all users display page /
 * 2. create user get
 * 3. create user post
 * 4. update user get
 * 5. update user post
 * 6. delete user
 */

const users = [
  {
    id: 1,
    firstName: "Jags",
    lastName: "Jags",
  },
  {
    id: 1,
    firstName: "Jags",
    lastName: "Jags",
  },
  {
    id: 2,
    firstName: "Hello",
    lastName: "Hello",
  },
  {
    id: 2,
    firstName: "Hello",
    lastName: "Hello",
  },
  {
    id: 2,
    firstName: "Hello",
    lastName: "Hello",
  },
];

const userListGet = (req, res) => {
  res.render("index", {
    title: "Hello",
    users: users,
  });
};

const userCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create User",
  });
};

export { userListGet, userCreateGet };
