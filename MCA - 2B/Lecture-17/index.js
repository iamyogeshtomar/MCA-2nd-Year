// console.log(x);
var x;

x = 12;

// console.log(x);

var sum = add(12, 23);

function add(a, b) {
  return a + b;
}

// Hoisting

// Closures

function greet() {
  var message = "Hello there";
  var num = 23;
  return function showMessage() {
    var max = 99;
    console.log(message);
    console.log(++num);
    return function bye() {
      console.log(++max);
      console.log(x);
    };
  };
}

var res = greet();
var subRes = res();
subRes();
// res();

// console.log(res);
