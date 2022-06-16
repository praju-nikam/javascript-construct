let day = (Math.floor(Math.random() * 8));

switch (day) {
    case 1:
        console.log("DAY " + day + " = SUNDAY");
        break;
    case 2:
        console.log("DAY " + day + " = MONDAY");
        break;
    case 3:
        console.log("DAY " + day + " = TUESDAY");
        break;
    case 4:
        console.log("DAY " + day + " = WEDNESDAY");
        break;
    case 5:
        console.log("DAY " + day + " =  THRSDAY");
        break;
    case 6:
        console.log("DAY " + day + " = FRIDAY ");
        break;
    case 7:
        console.log("DAY " + day + " = SATURDAY");
        break;
    case 0:
        console.log("Invalid Input");
        break;
}