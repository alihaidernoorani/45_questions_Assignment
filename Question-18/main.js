"use strict";
let places = ["Paris", "London", "New York", "Berlin", "Amsterdam"];
console.log("Original list of places: ", places);
//Sorts the list alphabetically using the spread operator. It has no effect on the original list
console.log("Alphabetical order:", [...places].sort());
console.log("Original list: ", places);
//Sorts the list in reversed alphabetical order using the spread operator. It has no effect on the original list
console.log("Reversed alphabetical order: ", [...places].sort().reverse());
console.log("Original list: ", places);
//Reverses the places list
console.log("Reversed order:", places.reverse());
//Reversing the reversed order brings back the original list
console.log("Original order:", places.reverse());
//Sorts the list alphabetically
console.log("Alphabetical order:", places.sort());
//Sorts the list in reverse alphabetical order
console.log("Reverse alphabetical order:", places.reverse());
