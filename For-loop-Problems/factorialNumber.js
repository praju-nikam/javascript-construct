/*
 Write a program that computes a factorial of a number taken as input.
 Factorial – 5! = 1 * 2 * 3 * 4 * 5
*/
const prompt = require("prompt-sync")();
let number = prompt("Enter number to find factorial = ");
let factorial = 1;
for (let i = 2; i <= number; i++) {
    factorial = factorial * i;
}
console.log(number + "! = " + factorial);