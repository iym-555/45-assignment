"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_names = ["Hamza", "Umer", "Ali"];
let great_magicians = make_great(magicians_names);
//console.log(great_magicians);
show_magicians(great_magicians);
