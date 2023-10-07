"use strict";

const calculateButton = document.querySelector(".btn-calculate");
const output = document.querySelector(".output");

function printTable(from, to, step = 1, func) {
  if (func === undefined) {
    return;
  }
  let result = "";
  result += `<table class="striped centered">`;
  result += "<thead><tr><th>x</th><th>y</th></tr></thead><tbody>";
  for (var x = from; x <= to; x += step) {
    result += "<tr>";
    result += "<td>" + x + "</td>";
    result += "<td>" + func(x) + "</td>";
    result += "</tr>";
  }
  result += "</tbody></table>";
  output.innerHTML = result;
}

// function quadratic(x) {
//   return x ** 2;
// }

// function cubic(x) {
//   return x ** 3;
// }

// function squareRoot(x) {
//   return Math.sqrt(x);
// }
// function sinus(x) {
//   return Math.sin(x);
// }

// const functions = {
//   quadratic,
//   cubic,
//   squareRoot,
//   sinus,
// };

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
