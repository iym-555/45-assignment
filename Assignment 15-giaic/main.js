"use strict";
let guestList = ["Hamza", "Umer", "Hannan"];
let unableattendGuest = guestList.splice(1, 1)[0];
console.log(`${unableattendGuest} is not coming, he has some work to do`);
let newMember = guestList.push("Maryam");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You are invited to the dinner tonight`);
});
