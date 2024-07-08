"use strict";
let current_users = ["Ali", "hamza", "umer", "Bilal", "Aurangzeb"];
let new_users = ["Bisma", "Maryam", "Umer", "Hamza", "Ayesha"];
new_users.forEach(newComer => {
    let my_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === newComer.toLowerCase());
    if (my_condition) {
        console.log(`Sorry ${newComer} is already taken!. You need to enter a new username`);
    }
    else {
        console.log(`This Username ${newComer} is available`);
    }
});
