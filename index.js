"use strict";

let pills = document.querySelectorAll("li");
let movies = document.querySelectorAll("section");

console.log(pills, movies);

let checkAndRemoveClass = function (array, ...classToCheck) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].classList.contains(classToCheck)) {
      array[i].classList.remove(classToCheck);
      break;
    }
  }
};

for (let j = 0; j < pills.length; j++) {
  pills[j].addEventListener("click", function (e) {
    checkAndRemoveClass(movies, "active");
    checkAndRemoveClass(pills, "selected");
    pills[j].classList.add("selected");
    movies[j].classList.add("active");
  });
}
