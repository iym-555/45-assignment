"use strict";
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nNow Enjoy Sandwich\n");
}
makeSandwich("Bread", "Butter");
makeSandwich("Egg", "Cheese", "Chicken");
makeSandwich("Egg", "Cheese", "Chicken", "Bread", "Butter", "Tomato", "Ketchup", "Mayo");
