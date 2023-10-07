"use strict";

function compare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}

let arr = [40, 3, 1, 32, 11];
arr.sort((a, b) => a - b); // ODnakove iz functsijeju
console.log(arr);

function sum(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * + sum(n - 1);
  }
}

console.log(sum(5));
