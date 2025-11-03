function car(manufacturer, model, color, year, start, rev) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.year = year;
  this.start = function () {
    console.log(start);
  };
  this.rev = function () {
    console.log(rev);
  };
}

const gtr = new car(
  "Nissan",
  "GTR",
  2003,
  "Purple",
  "bam bam bam",
  "stututututututu"
);

console.log(gtr);

const mazda = Object.create(gtr);

const supra = Object.create(mazda);

supra.manufacturer = "Toyota";
supra.model = "Supra";
supra.year = 2002;
supra.color = "neon";
supra.start = "brbrbrbrbrbrbrr";
supra.rev = "stu stu stu stu";

const lancer = Object.create(supra);
