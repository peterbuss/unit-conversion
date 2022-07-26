/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meter2feet = 3.281;
const liter2gallons = 0.264;
const kilo2pounds = 2.204;

const button = document.getElementById("convert-button");
const input = document.getElementById("input");

const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

button.addEventListener("click", function() {
    const input_val = input.value;

    const feet = (input_val * meter2feet).toFixed(3) ;
    const meters = (input_val / meter2feet).toFixed(3) ;
    length.textContent = `${input_val} meters = ${feet} feet | 
    ${input_val} feet = ${meters} meters`;

    const gallons = (input_val * liter2gallons).toFixed(3);
    const liters = (input_val / liter2gallons).toFixed(3);
    volume.textContent = `${input_val} liters = ${gallons} gallons |
    ${input_val} gallons = ${liters} liters`;

    const pounds = (input_val * kilo2pounds).toFixed(3);
    const kilos = (input_val / kilo2pounds).toFixed(3);
    mass.textContent = `${input_val} kilos = ${pounds} pounds |
    ${input_val} pounds = ${kilos} kilos`;
})
