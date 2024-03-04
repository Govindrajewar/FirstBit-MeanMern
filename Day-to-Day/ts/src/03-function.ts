console.log("function with 'void' return type: ");
function sayHello(): void{
    console.log("Hello Ji");
}
sayHello();

console.log("function with 'number' return type:");
function sum(a: number, b: number): number {
    return a + b;
}
console.log("The sum is :",sum(3,4));

