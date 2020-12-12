// function f1(i2: number) {
//     // i will be shadowed
//     console.log("Parameter value:", i2);
//     let i: number = 10; // Shadow #1
//     console.log("Variable value:", i);
//     for (let i = 100; i < 101; i++) {
//         // Shadow #2
//         console.log("For-statement value:", i);
//         for (let i = 200; i < 201; i++) {
//             // Shadow #3
//             console.log("For-statement value 2:", i);
//         }
//     }
//     console.log("Variable value:", i);
// }
// f1(0);


function mainFunction2() {
    let innerFunction;
    let listFunctions = [];
    for (let i = 10; i < 15; i++) {
        innerFunction = (function (param1: number) {
            let f = function () {
                return param1;
            };
            return f;
        })(i * 100);
        listFunctions.push(innerFunction);
    }
    for (let k = 0; k < 5; k++) {
        console.log(listFunctions[k]());
    }
}
mainFunction2();