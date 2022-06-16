//Write a program that takes a input and determines if the number is a prime.
/* A prime number is a positive integer that is only divisible by 2 and itself. For example, 2, 3, 5, 7, 11 
are the first few prime numbers.*/
const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number : "));
if (number >= 2) {
    let flag = 0;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1) {
        console.log(number + " is a not prime Number")
    } else {
        console.log(number + " is a Prime Number")
    }
} else {
    console.log("Invalid !!")
}