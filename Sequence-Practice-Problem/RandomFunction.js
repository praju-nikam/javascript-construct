// Q1  Random Function get Single Digit
console.log(Math.floor(Math.random() * 10)); // print randomly 0 to 9

/********************************************************************************************************************/
console.log();
// Q2 Random to get between 1 to 6
console.log(Math.floor(Math.random() * 6 + 1)); // print randomly 1 to 6

/******************************************************************************************************************/
console.log();
// Q3 Add two ramdom numbers & print result 
let number1 = Math.floor(Math.random() * 6 + 1);
console.log("The number of Dice1 : " + number1); //print randomly 1 to 6
let number2 = Math.floor(Math.random() * 6 + 1);
console.log("The number of Dice2 : " + number2); //print randomly 1 to 6
let sum1 = number1 + number2;
console.log("Sum of two Dice : " + sum1); // print sum of two random number

/******************************************************************************************************************/
console.log();
// Q4 Write a program that reads 5 Random 2 Digit values, then find their sum and the average
function generateRandomNumber() {
    return Math.floor(Math.random() * 89 + 10);
}
let sum = 0;
for (i = 1; i <= 5; i++) {
    let number = generateRandomNumber();
    console.log("Number" + i + " : " + number);
    sum = sum + number;
}
console.log("The sum of 5 random number of 2 digit value : " + sum);
console.log("The avg of 5 random number of 2 digit value : " + sum / 5);

/******************************************************************************************************************/
console.log();
/* Question 5: Unit Conversion
 a. 1ft = 12 in then 42 in = ? ft
 b. Rectangular Plot of 60 feet x 40 feet in meters
 c. Calculate area of 25 such plots in acres
 */
console.log("Convert 42 inch in feet")
console.log("1 ft = 12 inch");
let valueInFeet = 42 / 12;
console.log("42 inch in feet : " + valueInFeet + "ft");
console.log();

//b. Rectangular Plot of 60 feet x 40 feet in meters
let length = 60;
let width = 40;
let oneMeterInFeet = 3.28084;

console.log("Plot Length " + length + " Feet");
console.log("Plot width " + width + " Feet");

let areaInFeet = length * width;
console.log("Total Rectangular plot area in feet is : " + areaInFeet);

let areaInMeters = (areaInFeet / oneMeterInFeet);
console.log("Total Rectangular plot area in meters is : " + areaInMeters);
console.log();

// c.Calculate area of 25 such plots in acres
let acrearea = 25 * areaInMeters;
console.log("Area of 25 plots in meters is : " + acrearea);

// 1 acre = 4046.86 sq meters
let area = (acrearea / 4046.86);
console.log("Area of 25 plots in acers is : " + area);