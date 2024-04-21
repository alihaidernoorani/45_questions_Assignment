//Equality and inequality with strings
console.log("Equality and Inequality with strings:");
console.log("apple" === "apple"); //True
console.log("apple" as any === "orange" as any); //False

//Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log("HELLO".toLowerCase() === "hello"); //True
console.log("HELLO".toLowerCase() === "Wello".toLowerCase()); //False

//Numerical tests
console.log("\nNumerical tests:");
console.log(5 === 5); //True
console.log(5 > 7); //False

//Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log(7 > 5 && 7 < 9); //True
console.log(false || false); //False

//Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
let colors = ["red", "blue", "green", "yellow"];
console.log(colors.includes("blue")); //True
console.log(colors.includes("purple")); //False

//Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!colors.includes("orange")); //True
console.log(!colors.includes("green")); //False