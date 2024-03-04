let orgStr:string = "       Hello World        ";
let i:number = 10;
console.log("orgStr.charAt(i) : "+orgStr.charAt(i));

let modifiedStr:string = orgStr.concat(" This is Awesome!");
console.log(orgStr);
console.log(modifiedStr);

let trimStr:string = orgStr.trim();
console.log(trimStr);


let splitStr:any = trimStr.split(" ");
console.log(splitStr);

let upperStr:string = orgStr.toUpperCase();
console.log(upperStr);

let lowerStr:string = orgStr.toLowerCase();
console.log(lowerStr);

