// for (var i = 0; i < 15; i++) {
//   console.log(++i);
// }

// var x = 2;
// while (x < 23) {
//   console.log(++x);
//   x++;
// }

// var z = 11;

// do {
//   console.log("Loop working");
// } while (z < 10);

// var bmi = 32;

// if (bmi < 20) {
//   console.log("Gain some weight");
// } else if (bmi >= 20 && bmi <= 24) {
//   console.log(`You are healthy`);
// } else {
//   console.log(`Lose some weight!!!`);
// }

// for (var i = 0; i < 20; i++) {
//   if (i == 15) {
//     continue;
//     console.log(i);
//   }
//   if (i == 18) {
//     break;
//     console.log(i);
//   }
//   console.log(i);
// }

var num = 35;

for (var i = 1; i < num; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz`);
  } else if (i % 5 == 0) {
    console.log(`Buzz`);
  } else if (i % 3 == 0) {
    console.log(`Fizz`);
  } else {
    console.log(i);
  }
}
