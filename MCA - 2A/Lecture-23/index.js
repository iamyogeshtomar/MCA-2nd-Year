const kunal = {
  name: "Kunal",
  age: 24,
  city: "Mathura",
  check: function () {
    console.log(this);
  },
};

const pankaj = {
  name: "Pankaj",
  age: 28,
  city: "Rajouri",
  password: "1234567890",
  //   intro: function () {
  //     console.log("My name is " + this.name + " and I'm from " + this.city);
  //   },
  //   showBankBalance : function (userPassword){
  //     let password = this.password;
  //     let balance = 1234567890;
  //     if (password === userPassword){
  //         return function(){
  //             return balance;
  //         }
  //     }
  //   }
};

function introduction(university, state, userPassword) {
  console.log("My name is " + this.name + " and I'm from " + this.city);
  console.log("I'm from " + university + " " + state);

//   if (userPassword === this.password){
//     return this.showBankBalance;
//   }
}

// introduction("GLA University", "UP").call()

// introduction.apply(pankaj, ["GLA Uniersity", "UP"]);

const pankajsName = introduction.bind(pankaj, "GLA University", "UP")

// pankajsName();

