// const sumFn = function add(a, b) {
//   return a + b;
// };

// // console.log(myFunc(12, 34));

// const a = 90,
//   b = 23;

// function product(a, b) {
//   return a * b;
// }

// function myFunc(a, b, fn1, fn2) {
//   const product = fn1(a, b);
//   const sum = fn2(a, b);
//   return product - sum;
// }

// const res = myFunc(a, b, product, sumFn);
// console.log(res);

function person(name, age, height, weight) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.weight = weight;
}

const utkarsh = new person("Utkarsh", 26, "173", 65);

console.log(utkarsh["age"]);

const p1 = Object.create(utkarsh);

const p2 = Object.create(p1);

const p3 = Object.create(p2);

p2.name = "Vansh";
p2.age = 21;
p2.height = 170;
p2.weight = 70;

console.log(p3.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
// console.log(Object);

// console.log(typeof null);