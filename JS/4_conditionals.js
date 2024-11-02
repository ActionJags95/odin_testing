// If-else statement
if(1 == 3){
    console.log("True");
}
else{
    console.log("False");
}

let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance);


// Switch case statement
let choice = 4;
switch(choice){
    case 1:
        console.log("One");
    break;

    case 2:
        console.log("Two");
    break;

    case 3:
        console.log("Three");
    break;

    default:
        console.log("Other");
    break;

}


// Ternary operators
let isBirthday = false;
const greeting = isBirthday ? console.log("Happy birthday Mrs. Smith — we hope you have a great day!") : console.log("Good morning Mrs. Smith.");
