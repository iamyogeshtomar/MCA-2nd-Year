// Function as a constructor

// function car(manufacturer, model, color, year, isElectric) {
//   this.manufacturer = manufacturer;
//   this.model = model;
//   this.color = color;
//   this.year = year;
//   this.isElectric = isElectric;
//   this.start = function () {
//     console.log(`bam bam bam`);
//   };
//   this.rev = function () {
//     console.log(`stu tututututututu`);
//   };
//     this.engine = function (){
//       var x = `Castrol`;
//     }
// }
// const pro = {name:"Yogesh", age:27, weight:95}

// const mazda = new car(`Mazda`, `RX-34`, `Silver`, 2003, false);

// let, var and const

// var a;

// var a = 23;

// console.log(a);

// const c = 34;

// let b;

// console.log(b);

// b = 45;

// console.log(c);

// function sample() {
//   var a = 23;
// console.log(a);
//   function sample2() {
// }
// for (var i = 0; i < 5; i++) {}
//   sample2();

// if (a < 34){
//     var i = 1;
// }
//   console.log(i);
// }

// sample();

// console.log(a);

function fun1() {
  let b = 23;
  function fun2() {
    let b = 45;
    function fun3() {
      let b = 9654;
      console.log(b);
    }
    fun3();
  }
  fun2();
}
fun1();

// fun();

// const fun = ()=>{}
