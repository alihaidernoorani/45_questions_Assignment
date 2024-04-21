"use strict";
//Ali Haider Noorani
//12/04/2024
//Using Question 3 
//This program stores the name in a variable and then prints it as uppercase, lowercase and titlecase
let person_Name = "Ali Haider Noorani"; //Stores person name
console.log(person_Name.toUpperCase()); //Shows name in uppercase
console.log(person_Name.toLowerCase()); //Shows name in lowercase
console.log(person_Name.replace(/\b\w/g, word => word.toUpperCase())); //Shows name in titlecase
console.log("\n");
//Ali Haider Noorani
//12/04/2024
//Using Question 9
//The program stores the favourite number in a variable and then prints a message revealing the favourit number
let favouriteNumber = 5; //Stores number in variable
console.log("My favourite number is", favouriteNumber); //Prints message revealing facourite number
