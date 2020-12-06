function constFunction() {
    const myList = [1, 2, 3];
    myList.push(4);
    console.log(myList);
}
constFunction();

function constBlockedFunction() {
    const myList = [1, 2, 3];
    //  myList = [1, 2, 3, 4]
    console.log(myList);
}
constBlockedFunction();