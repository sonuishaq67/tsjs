function constChangeObject() {
    let obj1 = { p1: "p1value", p2: "will this dissappear?" }
    obj1 = { p1: "p1value changed", p2: "nope" };
    return obj1;
}
console.log(constChangeObject());