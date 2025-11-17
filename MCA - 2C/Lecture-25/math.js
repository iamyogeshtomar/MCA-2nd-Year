const add = (a, b) => { return a + b; };
const product = (a, b) => { return a * b; };

const PI = 3.14;

console.log("Inside math.js");

require("./index.js");

module.exports = { add, product, PI };

// console.log(module);