/*Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
1. a + b * c                             3. c + a / b
2. a % b + c                             4. a * b + c
*/

firstNumber = Math.floor(Math.random() * 100);
console.log("First Number = " + firstNumber);
secondNumber = Math.floor(Math.random() * 100);
console.log("Second Number = " + secondNumber);
thirdNumber = Math.floor(Math.random() * 100);
console.log("Third Number = " + thirdNumber);
console.log();

firstResult = firstNumber + secondNumber + thirdNumber;
secondResult = firstNumber % secondNumber + thirdNumber;
thirdResult = thirdNumber + firstNumber / secondNumber;
fourthResult = firstNumber * secondNumber + thirdNumber;

console.log("Result 1 = " + firstResult);
console.log("Result 2 = " + secondResult);
console.log("Result 3 = " + thirdResult);
console.log("Result 4 = " + fourthResult);
console.log();

// Minimum Result Value

if (firstResult < secondResult && firstResult < thirdResult && firstResult < fourthResult) {
    minimumResult = firstResult;
} else if (secondResult < firstResult && secondResult < thirdResult && secondResult < fourthResult) {
    minimumResult = secondResult;
} else if (thirdResult < firstResult && thirdResult < secondResult && thirdResult < fourthResult) {
    minimumResult = thirdResult;
} else {
    minimumResult = fourthResult;
}

console.log("minimum = " + minimumResult);
console.log();

// Maximum Result Value

if (firstResult > secondResult && firstResult > thirdResult && firstResult > fourthResult) {
    maximumResult = firstResult;
} else if (secondResult > firstResult && secondResult > thirdResult && secondResult > fourthResult) {
    maximumResult = secondResult;
} else if (thirdResult > firstResult && thirdResult > secondResult && thirdResult > fourthResult) {
    maximumResult = thirdResult;
} else {
    maximumResult = fourthResult;
}

console.log("Maximum Result = " + maximumResult);
console.log();