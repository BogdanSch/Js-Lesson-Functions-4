"use strict";

function initTraficLight(name) {
  let color = "green";
  let lightColor = () => {
    let arr = {
      name: name,
      color: color == "green" ? "yellow" : "green",
    };
    return arr;
  };
  return lightColor;
}

let trafficLight = initTraficLight("One");
console.log(trafficLight());

let trafficlight1 = trafficLight();
console.log(
  `%c ${trafficlight1.color}`,
  `background: ${trafficlight1}; color: #bada55`
);
trafficlight1 = trafficLight();
console.log(
  `%c ${trafficlight1.color}`,
  `background: ${trafficlight1.color}; color: #bada55`
);
