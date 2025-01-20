let user = new Object({
    name: "Jagruth",
    age: 19
}); // Declaring and defining using object constuctor
console.log(user.name);


let user2 = {}; // Defining object using object literal syntax
user2.name = "Jagruth";
user2.age = 19;
user2.isAdmin = true;
delete(user2.age); // age property is deleted
console.log(user2.gender); // if a property doesn't exist, then it is undefined
console.log(user2);

function makeUser(name, age) {
    var user = {
        name, // same as name: name
        age // same as age: age
    };

    return user;
}
console.log(makeUser("Jagruth", 19));


// in operator
// "key" in object

console.log('age' in user);
console.log('gender' in user);

// for in syntax
for(let key in user) {
    console.log(`${key}: ${user[key]}` + " " + typeof(key));
}

// -> Integer keys are arranged in sorted order in the object, whereas non-integer keys are sorted in creation-order
