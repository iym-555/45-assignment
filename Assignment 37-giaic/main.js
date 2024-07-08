"use strict";
function make_shirt(size = "Large", printMessage = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message ${printMessage} prints on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love JavaScript");
