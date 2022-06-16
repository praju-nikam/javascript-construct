// Extend the Flip Coin problem till either Heads or Tails wins 11 times.
let head = 0;
let tail = 0;
while ((head < 11) && (tail < 11)) {
    let result = Math.floor(Math.random() * 10) % 2;
    console.log(result);
    if (result == 0) {
        head = head + 1;
    } else {
        tail = tail + 1;
    }
}
console.log("Head Occured " + head + " Times ");
console.log("Tail Occured " + tail + " Times ");