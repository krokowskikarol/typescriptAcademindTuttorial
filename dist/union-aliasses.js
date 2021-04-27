"use strict";
// function add(num1:number, num2:number, printResult:boolean){
function combine(input1, input2, threatAs = "as-text") {
    let result;
    if (threatAs === "as-number" ||
        (typeof input1 === "number" && typeof input2 === "number")) {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(1, 2));
console.log(combine(1, 2, "as-text"));
console.log(combine("1", "2", "as-number"));
console.log(combine("1", "2"));
