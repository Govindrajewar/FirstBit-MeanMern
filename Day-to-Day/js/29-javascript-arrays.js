// original Array:
let marks = [50, 90, 60, 80, 70];
console.log('-----Original Array-----');
console.log("Original Array : "+marks);

// typeof array
console.log(typeof marks);

console.log("marks[0] = "+marks[0]);
console.log("marks[3] = "+marks[3]);

console.log('-----marks.length-----');
console.log(marks.length);

console.log('-----marks.forEach-----');
let sum = 0;
marks.forEach( (x) => {
    console.log(x);
    sum = sum + x ;
})
console.log('sum : '+ sum);

console.log('-----marks.push(69,420)-----');
marks.push(69,420);
console.log("Original Array : "+marks);

console.log('-----marks.pop()-----');
marks.pop();
console.log("Original Array : "+marks);

console.log('-----marks.sort()-----');
marks.sort();
console.log("Original Array : "+marks);

console.log('-----marks.concat(25,50,75)-----');
let concatArray = marks.concat(25,50,75);
console.log("concatenated Array : "+concatArray);
console.log("Original Array : "+marks);

console.log('-----marks.filter( mark => mark >70)-----');
let filteredArray = marks.filter( mark => mark >70);
console.log("filtered Array : "+filteredArray);
console.log("Original Array : "+marks);

console.log('-----marks.slice(2)-----');
let slicedArray = marks.slice(2);
console.log("sliced Array : "+slicedArray);
console.log("Original Array : "+marks);

console.log('-----marks.splice(2)-----');
let splicedArray = marks.splice(2,2);
console.log("spliced Array : "+splicedArray);
console.log("Original Array : "+marks);