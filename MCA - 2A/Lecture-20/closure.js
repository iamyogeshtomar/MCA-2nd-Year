function greet() {
  var a = 25;
  var message = "Hello World";
  return function showMessage() {
    console.log(++a);
    console.log(message);
    var p = 13;
    var o = 45678;
    return function newFn() {
      console.log(`Check Closure`);
      console.log(++p);
      console.log(++o);
    };
  };
}

var fn = greet();

var fn2 = fn();

fn2();

console.log(`Goodbye`);

// console.log(fn);
