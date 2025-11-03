function movie(name, year, rating, language) {
  this.name = name;
  this.year = year;
  this.rating = rating;
  this.language = language;
}

const shawshank = new movie("Shawshank Redemption", 1994, 9.6, "en");

const escapePlan = Object.create(shawshank);

const harryPotter = Object.create(escapePlan);

harryPotter.name = "Harry Potter";
harryPotter.year = 2001;
harryPotter.rating = 8.7;
harryPotter.language = "en";

const starWars = Object.create(harryPotter);
