// Map method
function addOne(number) {
    return number += 1;
}

let arr = [1, 2, 3, 4, 5];
let mappedArr = arr.map(addOne); // doing so will not change the original array, since "map" will return new array keeing the original intact
// The above code segment is same as:
// arr.forEach(number => {
//     number += 1;
// });
console.log(mappedArr);


// Filter method
function isOdd(number) {
    return (number%2 != 0);
}

let oddArr = arr.filter(isOdd);
// The above code segment is same as:
// function appendOdd(arr) {
//     let oddArr = [];
//     arr.forEach(num => {
//         if(isOdd(num));
//         oddArr.push(num);
//     });

//     return oddArr;
// }

console.log(oddArr);

