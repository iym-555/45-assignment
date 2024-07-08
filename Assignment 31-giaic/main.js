"use strict";
let userName = ["Umer", "Hamza", "Admin", "Bisma", "Ali"];
userName = [];
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
    userName.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thankyou for logging in again!`);
        }
    });
}
