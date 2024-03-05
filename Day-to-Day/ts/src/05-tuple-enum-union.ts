console.log("Tupel:");

// Declaration:
let t: [number, string];
// Assignment:
t = [7, "Dhoni"];
// Invalid Assignment:
//t = [7, 10];

console.log(t);
console.log(typeof t);



console.log("Enum");
enum days {mon=10, tue, wed, thu, fri, sat, sun};
console.log(days);

let day:days = days.fri;
console.log("day is: ",day);



console.log("Union");
let u: (number | string) = "Welcome";
console.log(u);
console.log(typeof u);

u = 18;
console.log(u);

// Invalid Assignment:
//u = true;    //Error: Type 'boolean' is not assignable to type 'string | number'

