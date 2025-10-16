// console.log(x);

var x;

var sum = add(99, 23);

function add(a, b) {
  return a + b;
}

x = 25;

// console.log(x);

function greet() {
  var a = 99;
  var message = "Today is tuesday!!!";
  return function showMessage() {
    console.log(--a);
    console.log(message);
  };
}

var newFn = greet();

newFn();

// console.log(newFn);
