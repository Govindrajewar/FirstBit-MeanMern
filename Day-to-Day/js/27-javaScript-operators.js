let a = 10 ;
let b = 20 ;

console.log('------ Arithmetic Operators -----');
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


console.log(2 ** 3)

a++
b++

++a
++b

console.log(a)
console.log(b)

a = a + 2 ;
a += 2 ;        // a = a + 2
console.log(a)

console.log('----- Comparison Operators -----');

let p = 5;
let q = 7;

console.log(p == q);     // false
console.log(p != q);     // true

console.log(p > q);     // false
console.log(p < q);     // true

console.log(5 == 5);    // true

// only compares value
console.log(5 == '5');    // true

// compare value with datatype
console.log(5 === '5');    // false



console.log('----- Logical Operators -----');

console.log('Logical AND');
/**
 * Logical AND: Truth Table
 * Condition 1   &&   Condition 2  =   Result
 *      T        &&       T        =       T
 *      T        &&       F        =       F
 *      F        &&       T        =       F
 *      F        &&       F        =       F
 */
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


console.log('Logical OR');
/**
 * Logical OR: Truth Table
 * Condition 1   ||   Condition 2  =   Result
 *      T        ||       T        =       T
 *      T        ||       F        =       T
 *      F        ||       T        =       T
 *      F        ||       F        =       F
 */
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// Logical NOT (!) - Reverse Result
console.log(!false);        // true
console.log(!true);         // false