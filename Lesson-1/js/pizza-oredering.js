"use strict";

function orderingPizza(pizzaType = 3, quantity = 1) {
  if (!isNaN(pizzaType) && !isNaN(quantity)) {
    let pizzaName = "";
    switch (pizzaType) {
      case 1:
        pizzaName = "піца з грибами";
        break;
      case 2:
        pizzaName = "піца з куркою і ананасом";
        break;
      case 3:
        pizzaName = "фірмова піца";
        break;
      default:
        return "Відбулася помилка, повторіть замовлення";
    }
    return `Ваше замовлення: ${pizzaName} - ${quantity}шт.`;
  } else {
    return "Відбулася помилка, повторіть замовлення";
  }
}

console.log(orderingPizza()); // Ваше замовлення: фірмова піца - 1шт.
console.log(orderingPizza(1)); // Ваше замовлення: піца з грибами - 1шт.
console.log(orderingPizza(2, 2)); // Ваше замовлення: піца з куркою і ананасом - 2шт.
console.log(orderingPizza(3)); // фірмова піца - 1шт.
console.log(orderingPizza(1, "two")); // Відбулася помилка, повторіть замовлення
