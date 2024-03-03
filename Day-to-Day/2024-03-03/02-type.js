console.log("Type 1: Variable declaration [without type and with value]");
let at2 = 10;
at2 = 20;
//at2 = true;               //Error: Type 'boolean' is not assignable to type 'number'.
console.log(typeof (at2));
console.log("Type 2: Variable declaration [with type and with value]");
let PI = 3.14; //Declaration of a constant
//PI = "Welcome";           //Error: Type 'string' is not assignable to type 'number'.
console.log(typeof (PI));
console.log("Type 3: Variable declaration [with type and without value]");
let height; //Declaration
//height = "welcome";       //Error: Type 'string' is not assignable to type
// console.log(typeof(height));
console.log("Type 4: Variable declaration [without type and without value]");
let x;
x = "Welcome";
console.log(typeof (x));
x = 10;
console.log(typeof (x));
x = true;
console.log(typeof (x));
