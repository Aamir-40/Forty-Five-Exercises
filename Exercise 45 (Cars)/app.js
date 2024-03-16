"use strict";
function createCar(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const mycar = createCar("toyota", "Corolla", { color: "black", year: "2024" });
console.log(mycar);
