// let
// const

// var a = 9;

// var a = "String";

// console.log(a);

// let x;

// x = 12;

// const a = 22;

// console.log(num);

// console.log(r);

// const w = 78;

// let r;

// var x = 34;

// console.log(window.x);

// console.log(r);

// console.log(w);

// function num() {
//   let m = "Message";
// //   console.log(m);
//   function lp() {
//     console.log(m);
//   }
//   lp();
// }

// num();

// console.log(m);

// var m;

// function hello() {
//   for (var i = 0; i < 5; i++) {
//     console.log("Done");
//   }
//   console.log(i);
// }

// hello();

// function fn (){
//     console.log(b);
//     var b = 23;
//     function a (){
//         console.log("Hello");
//     }
// }

// console.log(b);

// fn();

// for (let i = 0; i < 8; i++){
//     console.log(i);
// }

// Scope Chaining

// function a() {
//   let x = 12;
//   function b() {
//     let x = 34;
//     function c() {
//       let x = 56;
//       console.log(x);
//     }
//     c();
//   }
//   b();
// }

// a();

// function as a constructor

// const Amar = { name: "Amar", age: 24, favColor: "Black" };

function animal(name, genus, color) {
  this.name = name;
  this.genus = genus;
  this.color = color;
  (this.roar = function () {
    console.log(`Rawwwwwrrrrrrrr`);
  }),
    (this.sleep = function () {
      console.log(`Sher so gaya`);
    });
  // this.bankAccount = function (){
  //     let amount = 123457890;
  //     function increment (){

  //     }
  // }
}

const lion = new animal("Lion", "Cat", "Yellow");

console.log(lion);
