console.log(x);
var x;
var minus = fn(32, 19);

var sum = add(36, 25);

function add(a, b) {
  return a + b;
}

function square(a) {
  return a * a;
}

var fn = function subtract(a, b) {
    function greet (){
        console.log(`Hello World`);
    }
    greet();
    return a - b;
};

var sq12 = square(12);

console.log(sum);
console.log(fn);
console.log(sq12);
console.log(minus);
