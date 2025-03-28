let a, b, rest;
[a, b, ...rest] = [10, 20, 30]
console.log(a);
console.log(b);
console.log(...rest);

[a, ,b] = [10,20,30,40]
console.log(a);
console.log(b);


[p, q, ...[r, s]] = [1,2,3,4,5,6,7];

console.log(p);
console.log(q);
console.log(r);
console.log(s);