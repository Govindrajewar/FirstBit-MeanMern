let array:number[] = [1, 2, 3, 4, 5];
console.log("Number array: ", array);

console.log("display all array elements using forEach loop");

array.forEach( (value)=>{
    console.log(`Value : ${value}`);
})


let strArray:string[] ;
strArray = ["Abhi", "Rahul", "Raj"];
console.log("String array: ", strArray);
console.log("typeof strArray: ", typeof strArray);

console.log("display all string elements using for-in loop");

for (let i in strArray) {
    console.log(`${i} : ${strArray[i]}`);
}


console.log("Objects:");
type student = {
    name:string,
    city:string,
    jerseyNo:number
}

let student1:student = {
    name: "Raj",
    city: "Pune",
    jerseyNo: 12
}
console.log(student1);

// console.log("for-in");
// let index:any;
// for(let index in student1){
//     console.log(`${index} :`, student1[index]);
// }

