// Extend the program to take a range of number as input and output the Prime Numbers in that range.
const prompt = require('prompt-sync')();
const startNumber = prompt("Enter Starting Number : ");
const endNumber = prompt("Enter Ending Number : ");
console.log("The prime numbers between " + startNumber + " and " + endNumber + " are: ");
if (startNumber >= 0 && startNumber < endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {
        let flag = 0;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0 && i != 1) {
            console.log(i)
        }
    }
} else {
    console.log("Invalid !!")
}