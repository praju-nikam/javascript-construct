/*Write a program that takes a command-line argument n and prints the nth harmonic number.
 Harmonic Number is of the form
 H= 1/1 + 1/2 + 1/3 +.......+ 1/n
 */

var prompt = require('prompt-sync')();
var number = prompt("Enter the number : ");
var harmonic = 0;
for (let i = 1; i <= number; i++) {
    harmonic = harmonic + "1/" + i + " + ";
}
console.log(harmonic);