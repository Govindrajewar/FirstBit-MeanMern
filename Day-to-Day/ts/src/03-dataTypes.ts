console.log("number: ");
let a3:number = 10;
let b3:number = 3.14;
let c3:number = 0x369;

// binary number:
let d3:number = 0b101;

// octane number:
let e3:number = 0o524;

console.log(
    " a3 = "+a3 + " " +typeof a3,
    " b3 = "+b3 + " " +typeof b3,
    " c3 = "+c3 + " " +typeof c3,
    " d3 = "+d3 + " " +typeof d3,
    " e3 = "+e3 + " " +typeof e3
);


console.log("string: ");
let fullName:string = "Raj Kapoor";
console.log(fullName + " " + typeof fullName);


console.log("boolean: ");
let isValid:boolean = true;
console.log(isValid + " " + typeof isValid);


console.log("any: ");
let x:any = 5;
console.log(x + " " + typeof x);
x = 'Hello World';
console.log(x + " " + typeof x);
x = true;
console.log(x + " " + typeof x);
