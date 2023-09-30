"use strict";

function showMessage(name, message = "no message!") {
  console.log(`Hello, ${name}, ${message}`);
}
showMessage("John", "how are ya?");

function incr(x) {
  x++;
  console.log(x); // 3
}

let x = 2;
incr(x);
console.log(x); // 2 - x не змінилась

function sum(...args) {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s += +args[i];
  }
  return s;
}
console.log(sum(1, 2, 3));

function min(x1, x2) {
  if (x1 < x2) {
    return x1;
  }
  return x2;
}
