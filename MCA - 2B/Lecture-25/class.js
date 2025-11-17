// console.log("Inside class.js");

const a = require("./test.js");

function b() {
    console.log("Inside function b");
    a.a();
}

module.exports = { b };
