"use strict";
let alien_color = "green";
//The version that passes
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
//The version that fails
alien_color = "red";
if (alien_color == "green") {
    //No output because the condition is false
}
