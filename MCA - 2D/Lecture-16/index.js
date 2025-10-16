// console.log(x);

var x;

function add(a, b) {
  return a + b;
}

var sum = add(23, 45);

// console.log(sum);

x = 12;

// console.log(x);

function greet() {
  var a = 23;
  var message = "Hello There";
  return function showMessage() {
    console.log(++a);
    console.log(message);
  };
}

var newFn = greet(); //newFn holds showMessage function

// console.log(newFn);

newFn();

//
