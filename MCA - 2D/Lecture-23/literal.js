const a = 23, b = 34;

module.exports = { a, b };


const fs = require("fs/promises");
const path = require("path");

const filePath = path.resolve(__dirname, "MyFile.txt");

// console.log(__dirname);

const data = "Sample data for file";

fs.writeFile(filePath, data, {
    flag: "a",
});

const readData = fs.readFile(filePath, { encoding: "utf-8" });
// console.log(readData);
readData.then((data) => { console.log(data); });