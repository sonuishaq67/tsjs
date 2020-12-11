let x1 = undefined;
let x2 = null;
let x3 = -0;
let x4 = 0;
let x5 = NaN;
let x6 = {};
let x7: any[] = [];

function printTrueOrFalse(b: any | any[]): void{
  if(b){
    console.log(`The value ${b} is true`); 
  } else{
     console.log(`The value ${b} is false`); 
  }
}
printTrueOrFalse(x1);
printTrueOrFalse(x2);
printTrueOrFalse(x3);
printTrueOrFalse(x4);
printTrueOrFalse(x5);
printTrueOrFalse(x6);
printTrueOrFalse(x7);
