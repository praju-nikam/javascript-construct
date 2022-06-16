// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,....

const prompt = require('prompt-sync')();
let num = prompt("Enter a number : ");

let a = (num >= 1 && num <= 9);
let b = (num >= 10 && num <= 99);
let c = (num >= 100 && num <= 999);
let d = (num >= 1000 && num <= 9999);
let e = (num >= 10000 && num <= 99999);
let f = (num >= 100000 && num <= 999999);
let g = num >= 999999;

switch (true) {
    case a:
        console.log("unit");
        break;
    case b:
        console.log("Ten");
        break;
    case c:
        console.log("Hundred");
        break;
    case d:
        console.log("Thousand");
        break;
    case e:
        console.log("Ten thousand");
        break;
    case f:
        console.log("Lakh");
        break;
    case g:
        console.log("Invalid!!");
        break;
}