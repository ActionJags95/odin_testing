a = 1 + 2 + "hello";
b = "hello" + 1 + 2;
console.log(a);
console.log(b);

arr = [1,2,3,4,5]
console.log(typeof(arr));
arr.unshift(1,2);
console.log(arr);
console.log(typeof(arr));

arr.push(8,9,10);
console.log(arr);

console.log(arr.shift())
console.log(arr.pop());

console.log(arr);


arr.splice(1, 3, "hello");
console.log(arr);