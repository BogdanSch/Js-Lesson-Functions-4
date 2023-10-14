"use strict";

function initTrafficLight(name) {
  let color = "green";

  let changeLight = () => {
    color = color === "green" ? "yellow" : "red";
  };

  let getLightColor = () => {
    return color;
  };

  return {
    changeLight,
    getLightColor,
    name,
  };
}

let trafficLight = initTrafficLight("One");

console.log(trafficLight.name);
console.log(
  `%c ${trafficLight.getLightColor()}`,
  `background: ${trafficLight.getLightColor()}; color: #bada55`
);

trafficLight.changeLight();
console.log(
  `%c ${trafficLight.getLightColor()}`,
  `background: ${trafficLight.getLightColor()}; color: #bada55`
);

trafficLight.changeLight();
console.log(
  `%c ${trafficLight.getLightColor()}`,
  `background: ${trafficLight.getLightColor()}; color: #bada55`
);