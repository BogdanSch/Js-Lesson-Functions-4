"use strict";

let value1 = 0,
  value2 = 0,
  result = 0;
let action = "";

const output = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".btn-number");
const actionButtons = document.querySelectorAll(".btn-action");
const calculateButton = document.querySelector(".btn-calculate");
const clearButton = document.querySelector(".btn-clear");

numberButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (output.value == "0") {
      output.value = element.textContent;
    } else {
      output.value += element.textContent;
    }
  });
});

actionButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    value1 = +output.value;
    action = element.textContent;
    output.value = 0;
  });
});

clearButton.addEventListener("click", (e) => {
  output.value = 0;
});

calculateButton.addEventListener("click", (e) => {
  value2 = +output.value;
  let expression = value1 + action + value2;

  try {
    result = eval(expression);
    output.value = result;
  } catch (error) {
    alert("Error!");
  }
});
