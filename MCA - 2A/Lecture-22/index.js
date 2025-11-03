function car(name, year, color) {
  this.name = name;
  this.year = year;
  this.color = color;
}

const challenger = new car("Dodge", 2015, "Yellow");

const viper = Object.create(challenger);

const hellcat = Object.create(viper);

hellcat.name = "hellcat";
hellcat.year = 2008;
hellcat.color = "green";

const mustang = Object.create(hellcat);
