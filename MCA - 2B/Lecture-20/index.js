const tarun = {
  firstName: "tarun",
  lastName: "Chaudhary",
  age: 22,
  city: "Mathura",
  //   intro: function () {
  //     console.log("Hi, My name is " + this.firstName + this.lastName);
  //     // console.log(this);
  //   },
};
const kunal = {
  firstName: "Kunal",
  lastName: "Gautam",
  age: 23,
  city: "Mathura",
};

// function tellName(university, state) {
//   // console.log(this);
//   console.log(this.firstName + " " + this.lastName);
//   console.log("I'm from " + university + state);
// }
const tellName = (university, state) => {
  // console.log(this);
  console.log(this.firstName + " " + this.lastName);
  console.log("I'm from " + university + state);
};

// tellName.call(tarun);

tellName.apply(kunal, ["GLA University", "Uttar Pradesh"]);

// const kunalsName = tellName.bind(kunal, "GLA University", "UP");

// tellName()
