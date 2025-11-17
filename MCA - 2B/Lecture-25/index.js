// console.log(__dirname);

// console.log(module);

// console.log("Inside index.js");

// const math = require("./math.js");

// require("./class.js");

// const a = require("./test.js");
// a();

// const math2 = require("./math.js");


// console.log(math);

// console.log(math.add(2, 4));

const fs = require("fs/promises");
const path = require("path");

const newFilePath = path.resolve(__dirname, "MyFile.txt");

const sample = "I wrote this";

fs.writeFile(newFilePath, sample, {
    flag: "a",
});