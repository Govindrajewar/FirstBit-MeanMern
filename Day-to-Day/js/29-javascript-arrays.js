let marks = [50, 60, 80, 90, 70];
console.log(marks);

console.log(typeof marks);

console.log(marks[0]);
console.log(marks[3]);

console.log(marks.length);

let sum = 0;
marks.forEach( (x) => {
    console.log(x);
    sum = sum + x ;
})

console.log('sum : '+ sum);
