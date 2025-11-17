// b.js
// import { aFunction } from './a.js';

const A = require("./A.js");

function bFunction() {
    console.log("bFunction called");
    A.aFunction(); // Calling aFunction here could lead to issues if a.js isn't fully loaded yet
}


module.exports = { bFunction };