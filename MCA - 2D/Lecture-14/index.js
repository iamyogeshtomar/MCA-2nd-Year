/*

for initialization, termination, modification
{
body of loop
}

*/

// for (var i = 0; i < 24;i+=2) {
//   console.log(--i);
// }

// while (i <= 30) {
//   // console.log(i);
//   if (i == 18) {
//     continue;
//   }
//   i++;
//   console.log(i);
// }

// do {
//   console.log(++i);
// } while (false);

// var i = 23;

// if (i < 18) {
//   console.log(`You're not allowed to vote`);
// } else if (i == 18) {
//   console.log(`Happy Birthday`);
// } else {
//   console.log(`You must've voted already`);
// }

var n = 99;

// for (var i = 1; i <= n; i++) {
//   if (i % "5" === 0 && i % "3" === 0) {
//     console.log(`FizzBuzz`);
//   } else if (i % "3" === 0) {
//     console.log(`Fizz`);
//   } else if (i % "5" === 0) {
//     console.log(`Buzz`);
//   } else {
//     console.log(i);
//   }
// }

switch (n) {
  case 23:
    console.log(`THis is 23`);
    break;
  case 75:
    console.log(`Close Call`);
    break;
  case "78":
    console.log(`78, but in string`);
    break;
  case 78:
    console.log(`Right number again`);
    break;
  case 78:
    console.log(`Right number`);
    break;
  default:
    console.log(`No number found`);
}
