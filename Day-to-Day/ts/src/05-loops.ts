console.log("while loop");
let counter:number = 1;
while(counter<=10){
    if(counter==5)
        break;
    console.log("counter = ", counter);
    counter++;
}


console.log("for loop");
for (let i:number = 1; i <= 10; i++){
    if(i==5)
        continue;

    console.log("i = ", i);
}


console.log("do-while loop");
let count:number = 1;
do{
    console.log("count = ", count);
    count++;
} while(count<=5)