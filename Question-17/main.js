"use strict";
let guests = ["Albert Einstein", "Marie Curie", "Muhammad Ali Jinnah", "John Adams", "Thomas Jefferson", "Queen Elizebeth"];
console.log("Unfortunately, I can only invite two people for dinner.\n");
for (let i = guests.length - 1; i > 2; i--) {
    console.log(`Sorry ${guests[i]}, I can't invite you for dinner.`);
    guests.pop();
}
console.log("\n");
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
while (guests.length > 0) {
    guests.pop();
}
console.log(`Empty guest list: ${guests}`);
