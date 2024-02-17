// Single line comment

/*
 multi line comment
*/

var x = 100;
console.log(x);

x = x+10;
console.log(x);
console.log(typeof x);

x = x+2.5;
console.log(x);
console.log(typeof x);

x = 'Welcome';
console.log(x);
console.log(typeof x);

// Hoisting:
/**
 * let variables have block scope
 * var variables are not block scope
 */

function demo(){

    var a = 601;
    let b = 602;
    console.log(a);     //601
    console.log(b);     //602

    // block scope:
    console.log('values before the block function')
    {
        var a =501;
        let b =502;
        console.log(a); //501
        console.log(b); //502
    }

    console.log('values after the block function')
    console.log(a);     //501
    console.log(b);     //602
}

demo();


const PI = 3.14
console.log(PI)

//PI = 10;        // Error: Assignment to constant variable.


console.log('Some more variables')
let n = 10;                             // number
let s = 'JavaScript is Awesome'         // string
const c = 3.14                          // number
let invalid = true                      // boolean
let student = {name: 'abhi', rollNo: 7} // object

console.log(typeof(n))
console.log(typeof(s))
console.log(typeof(c))
console.log(typeof(invalid))
console.log(typeof(student))
