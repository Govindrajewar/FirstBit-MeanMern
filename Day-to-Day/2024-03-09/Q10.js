/*
Q: Write a program to accept 5 numbers from user (hint: use 'prompt') and find the second highest number from them

Example: if user enters: 5, 10, 4, 19, 25

Then print: The second highest no is: 19
*/

/*
let array = [5, 10, 4, 19, 25];
array.sort((a,b) => b-a );
console.log(array[1]);
*/


let array = new Array(5);
let input = 0;

for(let i=0 ; i<array.length ; i++){
    input = Number(prompt('Enter a number: '));
    array[i] = input;
}

// sort array in descending order
array.sort( (a,b) => b-a );
console.log(array[1]);
