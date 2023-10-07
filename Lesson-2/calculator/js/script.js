"use strict";

const calculateButton = document.querySelector(".btn-calculate");
const output = document.querySelector(".output");

calculateButton.addEventListener("click", (e) => {
  const input = document.querySelector(".input-expression");
  let expression = input.value;

  if (expression.length) {
    try {
        let answer = eval(expression);
        output.innerHTML = `Your answer is: ${answer}`;
    } catch (error) {
        output.innerHTML = `<span class="red-text">Error, please consider entering correct one!</span>`;
    }
  }
});
