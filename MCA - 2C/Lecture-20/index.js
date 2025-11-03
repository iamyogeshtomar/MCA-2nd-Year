const ritik = {
  name: "Ritik",
  age: 23,
  city: "Patna",
};

const utkarsh = {
  name: "Utkarsh",
  age: 24,
  city: "Delhi",
  //   showPassword: function () {
  //     let password = "12345678";
  //     return function () {
  //       console.log(password);
  //     };
  //   },
  //   intro: function () {
  //     console.log("I'm " + this.name + " and I'm from " + this.city);
  //   },
  //   check: function () {
  //     console.log(this);
  //   },
};

// const password = utkarsh.showPassword();

function introduction(university, state) {
  console.log("I'm " + this.name + " and I'm from " + this.city);
  //   console.log(`fxgjphjkmlnj`);
  console.log("I'm from " + university + " in " + state);
}

// introduction.call(utkarsh);

// introduction.apply(utkarsh, ["GLA University", "UP"]);

const utkarshsName = introduction.bind(utkarsh, "GLA University", "UP");

