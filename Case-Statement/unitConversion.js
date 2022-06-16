/* Write a program that takes User Inputs and does Unit Conversion of different Length units
1. Feet to Inch             3. Inch to Feet
2. Feet to Meter            4. Meter to Feet
*/

const prompt = require('prompt-sync')();
let unitChoice = prompt("Enter yuo want to do : \n 1.Feet to Inch \n 2.Feet to Meter \n 3.Inch to Feet \n 4.Meter to Feet \n ");

switch (unitChoice) {
    case 1:
        let feet = prompt("Enter value in feet : ");
        let feetToInch = feet * 12
        console.log("Converted Value feet to inch : " + feetToInch);
        break;
    case 2:
        let feet1 = prompt("Enter value in feet : ");
        let feetToMeter = feet1 / 3.28084
        console.log("Converted Value feet to meter : " + feetToMeter);
        break;
    case 3:
        let inch = prompt("Enter value in Inch : ");
        let inchToFeet = inch * 0.0833333
        console.log("Converted Value inch to feet : " + inchToFeet);
        break;
    case 4:
        let meter = prompt("Enter value in Meter : ");
        let meterToFeet = (meter * 3.28084)
        console.log("Converted Value meter to feet : " + meterToFeet);
        break;
    default:
        console.log("Invalid Input");
        break;

}