"use strict";

const availableDrinks = [
  { name: "espresso", price: 2 },
  { name: "latte", price: 3 },
  { name: "cappuccino", price: 4 },
  { name: "hot chocolate", price: 4 },
];

function drinks(...drinks) {
  let bill = "";

  for (let i = 0; i < drinks.length; i++) {
    const orderedDrink = drinks[i];
    const foundDrink = availableDrinks.find(
      (drink) => drink.name === orderedDrink
    );

    if (foundDrink) {
      bill += `Drink ${i + 1}: ${foundDrink.name} costs ${foundDrink.price}$\n`;
    } else {
      bill += `Drink ${i + 1}: ${orderedDrink} is not available\n`;
    }
  }
  return bill;
}

console.log(drinks("espresso", "latte"));
