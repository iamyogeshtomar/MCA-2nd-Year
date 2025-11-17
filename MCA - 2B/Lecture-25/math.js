
console.log("Inside math.js");

require("./index.js");


const add = (a, b) => { return a + b; };
const subtract = (a, b) => { return a - b; };
const PI = 3.14;
// const password = "1234567890";


module.exports = {
    add,
    subtract,
    PI,
};

// console.log(module);