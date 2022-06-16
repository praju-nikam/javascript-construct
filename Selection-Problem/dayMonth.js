const prompt = require("prompt-sync")();

var day = prompt("Enter day: ");
var month = prompt("Enter  Month : ");

if ((day <= 20 && month <= 6) && (day >= 20 && month >= 3) && (day <= 31)) {
    console.log("True");
} else {
    console.log("false");
}