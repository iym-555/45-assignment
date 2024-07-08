"use strict";
let guestList = ["Hamza", "Umer", "Hannan"];
console.log("Great news guys! We found a bigger table");
guestList.unshift("Maryam");
guestList.splice(Math.floor(guestList.length / 2), 0, "Bisma");
;
guestList.push("Mouiza");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You are cordially invited to the dinner tonight`);
});
