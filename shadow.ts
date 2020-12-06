function f1(i2: number) {
    // i will be shadowed
    console.log("Parameter value:", i2);
    let i: number = 10; // Shadow #1
    console.log("Variable value:", i);
    for (let i = 100; i < 101; i++) {
        // Shadow #2
        console.log("For-statement value:", i);
        for (let i = 200; i < 201; i++) {
            // Shadow #3
            console.log("For-statement value 2:", i);
        }
    }
    console.log("Variable value:", i);
}
f1(0);