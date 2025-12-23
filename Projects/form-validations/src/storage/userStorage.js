class User {
  #id;
  #firstName;
  #lastName;
  constructor(id, firstName, lastName) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  getID = () => this.#id;
  getFirstName = () => this.#firstName;
  getLastName = () => this.#lastName;

  updateFirstName(newFirstName) {
    this.#firstName = newFirstName;
  }
  updateLastName(newLastName) {
    this.#lastName = newLastName;
  }
}

class UserStorage {
  #userArray;
  constructor() {
    this.#userArray = [];
  }

  addUser(id, firstName, lastName) {
    this.#userArray.push(new User(id, firstName, lastName));
  }

  deleteUser(id) {
    const targetUser = this.#userArray.find((user) => id === user.getID());
    const targetUserIdx = this.#userArray.indexOf(targetUser);
    this.#userArray.splice(targetUserIdx, 1);
  }

  getAllUsers = () => this.#userArray;

  updateUser(id, firstName, lastName) {
    const userIndex = this.#userArray.find((user) => id === user.getID());
    const targetUser = this.#userArray[userIndex];
    targetUser.updateFirstName(firstName);
    targetUser.updateLastName(lastName);
  }
}

export default new UserStorage();
