 // Read a Number and Display the week day (Sunday, Monday,...)

 let day = Math.floor(Math.random() * 7); // Print randomly 0 to 7
 if (day == 0) {
     console.log("Week of Day = Sunday")
 } else if (day == 1) {
     console.log("Week of Day = Monday");
 } else if (day == 2) {
     console.log("Week of Day = Tuesday");
 } else if (day == 3) {
     console.log("Week of Day = Wednesday");
 } else if (day == 4) {
     console.log("Week of Day = Thrusday");
 } else if (day == 5) {
     console.log("Week of Day = Friday");
 } else if (day == 6) {
     console.log("Week of Day = Saturday");
 } else {
     console.log("Enter Wrong Number !!")
 }