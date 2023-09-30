"use strict";

let products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];
const printProducts = (products) => {
  for (let i = 0; i < products.length; i++) {
    console.log(
      "Name: " +
        products[i].name +
        ", Calories: " +
        products[i].calories +
        ", Color: " +
        products[i].color +
        ", Sold: " +
        products[i].sold +
        "</br>"
    );
  }
  console.log("\n");
};

const compareName = (colaA, colaB, isReverse = false) => {
  const result =
    colaA.name < colaB.name ? -1 : colaA.name === colaB.name ? 0 : 1;
  return isReverse ? -result : result;
};

const compareCalories = (colaA, colaB, isReverse = false) => {
  const result =
    colaA.calories < colaB.calories
      ? -1
      : colaA.calories === colaB.calories
      ? 0
      : 1;
  return isReverse ? -result : result;
};

const compareColor = (colaA, colaB, isReverse = false) => {
  const result =
    colaA.color < colaB.color ? -1 : colaA.color === colaB.color ? 0 : 1;
  return isReverse ? -result : result;
};

const compareSold = (colaA, colaB, isReverse = false) => {
  const result =
    colaA.sold < colaB.sold ? -1 : colaA.sold === colaB.sold ? 0 : 1;
  return isReverse ? -result : result;
};

console.log("Array: ");
printProducts(products);

console.log("Sort by name reverse: ");
products.sort((colaA, colaB) => compareName(colaA, colaB, true));
printProducts(products);

console.log("Sort by color: ");
products.sort(compareColor);
printProducts(products);

console.log("Sort by calories: ");
products.sort(compareCalories);
printProducts(products);

console.log("Sort by sold: ");
products.sort(compareSold);
printProducts(products);
