function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
var combinedValues;
combinedValues = add;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(printResult(add(55, 33)));
console.log(combinedValues(55, 33));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
