var x = 24;

switch (x) {
  case 11:
    console.log(`This is 11, not 24`);
    break;
  case 23:
    console.log(`Close call`);
    break;
  case "24":
    console.log(`Type string 24`);
    break;
  case 25:
    console.log(`Value matched`);
    break;
  default:
    (function () {
      console.log(`function executed`);
    })();
}

// if (24 === "24") {
//   console.log(`Value mathced`);
// } else {
//   console.log(`Wrong`);
// }
