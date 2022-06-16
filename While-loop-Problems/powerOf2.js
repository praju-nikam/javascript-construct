/* Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached.. */
const prompt = require('prompt-sync')();

const n = Number(prompt("Enter a number: "));

if (n >= 0) {
    while (true) {
        let power = Math.pow(2, n)
        if (power <= 256) {
            console.log("2^" + n + " = " + power);
            break;
        } else {
            console.log("Maximum reached");
            break;
        }
    }
} else {
    console.log("Enter only non-negative integers.");
}