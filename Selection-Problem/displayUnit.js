// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompt = require('prompt-sync')();
let number = prompt("Enter a number : ");

if (number >= 1 && number <= 9) {
    console.log("Unit");
} else if (number >= 10 && number <= 99) {
    console.log("Ten");
} else if (number >= 100 && number <= 999) {
    console.log("Hundred");
} else if (number >= 1000 && number <= 9999) {
    console.log("Thousand");
} else if (number >= 10000 && number <= 99999) {
    console.log("Ten Thousand");
} else if (number >= 100000 && number <= 999999) {
    console.log("Lakh")
} else {
    console.log("Enter Wrong Number !!")
}