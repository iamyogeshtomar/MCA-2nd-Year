// (/*space for parameters */) => {
//   /* function body */
// };

// /**argument */ =>  /**Line of execution */

var fn1 = (a, b) => {
  return a + b;
  //   let r = 34;
  //   console.log(r);
};

console.log(fn1(2, 43));

// var fn2 = (a) => console.log(a);

const arr = [1, 2, 3, 4, 5, 6, 7, 87, 98, 64, 212, 56];
// let arr2 = new Array();

// for (var i = 0; i < arr.length; i++){

// }

const arr2 = arr.map((item, index) => {
  return item * 2;
});

const arr3 = arr.filter((item) => {
  return item % 2 != 0;
});

function reduce(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// const sum = arr.reduce((item, sum) => {
//   return (sum += item);
// });

// console.log(sum);

// console.log(arr2);
// console.log(arr3);
const sum = reduce(arr);
console.log(sum);
