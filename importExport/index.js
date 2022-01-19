// // welcome to immport export module

// const oper = require("./oper")

// console.log(oper.add(5, 5));
// console.log(oper.sub(5, 5));
// console.log(oper.mul(5, 5));
// console.log(oper.div(5, 5));

// console.log(oper.name);
// welcome to immport export module

const { add, sub, mul, div, name } = require("./oper")

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(mul(5, 5));
console.log(div(5, 5));

console.log(name);
