"use strict";
let orgStr = "       Hello World        ";
let i = 10;
console.log("orgStr.charAt(i) : " + orgStr.charAt(i));
let modifiedStr = orgStr.concat(" This is Awesome!");
console.log(orgStr);
console.log(modifiedStr);
let trimStr = orgStr.trim();
console.log(trimStr);
let splitStr = trimStr.split(" ");
console.log(splitStr);
let upperStr = orgStr.toUpperCase();
console.log(upperStr);
let lowerStr = orgStr.toLowerCase();
console.log(lowerStr);
