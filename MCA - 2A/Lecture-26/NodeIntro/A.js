// a.js
// import { bFunction } from './b.js';

const B = require("./B.js");

aFunction();

function aFunction() {
    console.log("aFunction called");
    B.bFunction(); // This might call bFunction before it's fully initialized
}

aFunction();

module.exports = { aFunction };