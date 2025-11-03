const saurabh = {
  name: "Saurabh",
  age: 25,
  city: "Dauji",
};

const Pratee = {
  name: "Pratee",
  age: 24,
  city: "Agra",
  hidePassword: function () {
    let password = "123456789";
    return function () {
      console.log(password);
    };
  },
  intro: function () {
    console.log("I'm " + this.name + "and I'm from " + this.city);
  },
  //   check: function () {
  //     console.log(this);
  //   },
};

function introduction(university, state) {
  console.log(this.name + " is from " + this.city);
  console.log("I'm from " + university + state);
}

// introduction()

// introduction.call(saurabh)

// introduction.apply(saurabh, ["GLA University", "UP"]);

const saurabhsName = introduction.bind(saurabh, "GLA University", "UP");



// let arr = [{}, {}];

// function addNewFunction (arr){
//     for (){
//         function callName (){}
//         callName.call(a[i]);
//     }
// }
