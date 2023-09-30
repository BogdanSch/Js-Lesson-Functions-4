"use strict";

let outputContainer = document.querySelector(".output");

function printAnimal(animal, count) {
  let cat = " =^.^= ",
    dog = " 0/0 ";
  let str = "";
  for (let i = 0; i < count; i++) {
    if (animal === "cat") {
      str += ` <td>${cat}</td>`;
    } else if (animal === "dog") {
      str += ` <td>${dog}</td>`;
    } else {
      str += "This animal doesn't exist!";
      break;
    }
  }
  outputContainer.outerHTML = str;
}

const count = +prompt("Enter count: ");
const animal = prompt("Enter your animal: ");
printAnimal(animal, count);