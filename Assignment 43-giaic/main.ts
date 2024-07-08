function show_magicians(magicians:string[]) {
    magicians.forEach(name => console.log(name)
    );
} 
function make_great(magicians:string[]) {
    return magicians.map(name => `The Great ${name}`);
}

let magicians_names = ["Hamza", "Umer", "Ali"];
let copy_magicians_name = magicians_names.slice();
let copy_great_magicians = make_great(copy_magicians_name);
console.log("\nOriginal Array\n");
show_magicians(magicians_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);