"use strict";
console.log("Tupel:");
// Declaration:
let t;
// Assignment:
t = [7, "Dhoni"];
// Invalid Assignment:
//t = [7, 10];
console.log(t);
console.log(typeof t);
console.log("Enum");
var days;
(function (days) {
    days[days["mon"] = 10] = "mon";
    days[days["tue"] = 11] = "tue";
    days[days["wed"] = 12] = "wed";
    days[days["thu"] = 13] = "thu";
    days[days["fri"] = 14] = "fri";
    days[days["sat"] = 15] = "sat";
    days[days["sun"] = 16] = "sun";
})(days || (days = {}));
;
console.log(days);
let day = days.fri;
console.log("day is: ", day);
console.log("Union");
let u = "Welcome";
console.log(u);
console.log(typeof u);
u = 18;
console.log(u);
// Invalid Assignment:
//u = true;    //Error: Type 'boolean' is not assignable to type 'string | number'
