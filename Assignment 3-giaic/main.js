"use strict";
let personName = "ishwa Younus";
console.log("lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
