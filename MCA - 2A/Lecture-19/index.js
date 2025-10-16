console.log(x);
var x;

var a = 23,
b = 24;

var sum = add(a, b);

function add(a, b) {
    // add (a, b);
    return a + b;
}

function cube(a) {
    return a * a * a;
}

var cube12 = cube(12);

var fn = function subtract(a, b) {
    return a - b;
};

var min = fn(34, 12);

console.log(sum);
console.log(cube12);
console.log(cube);
console.log(fn);
console.log(min);
