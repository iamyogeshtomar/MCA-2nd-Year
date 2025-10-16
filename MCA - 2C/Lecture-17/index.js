// function add(a, b) {
//   return a + b;
// }

// add(23, 34);

// console.log(`Hello`);

let x = 34;

// var y;

// var y = 23;

function add() {
  //   var a = 24;
  //   console.log(x);
  let x = 12;
  function sub() {
    // var x = 19;
    console.log(x);
  }
  sub();
}
// console.log(a);

add();

// console.log(typeof null);
// let x = 23;

// console.log(a);

// a = 23;

// add();

// console.log(y);

// console.log(x);

// const armaan = { name: "Armaan", age: 27 };

function car(name, build, color) {
  this.name = name;
  this.build = build;
  this.color = color;
  this.start = function () {
    console.log(`Car started`);
  };
  this.service = function service() {
    let engineOil = 23;
  };
}

const nios = new car("NIOS", 2025, "White");

console.log(nios.start());

// for (let i= 0; i < 99; i++){
//     let arr = new Array();
//     arr.push (new car )
//     console.log(new car ());
// }
