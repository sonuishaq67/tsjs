// let variable1: any;
// variable1 = "It is a string";
// console.log(variable1.substr(0,2)) // Output "it"
// variable1 = 1;
// console.log(variable1.substr(0,2)) // Crash

let variable2: unknown;
variable2 = "It is a string";
let variable2String = variable2 as string;
console.log(variable2String.substr(0, 2)) // Does not compile here
variable2 = 1;
console.log(variable2.substr(0, 2)) // Does not compile here