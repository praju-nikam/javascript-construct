/*Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.*/
const prompt = require("prompt-sync")();
let number = prompt("Enter number to find factor = ");

let primeFactors = (number) => {
    var factors = [];

    for (var i = 2; i <= number; i++) {
        while ((number % i) === 0) {
            factors.push(i);
            number /= i;
        }
    }

    return factors;
}
console.log("Factors of " + number + " = " + primeFactors(number));