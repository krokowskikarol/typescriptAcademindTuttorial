function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

let combinedValues: (a: number, b: number) => number;
combinedValues = add;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

console.log(printResult(add(55, 33)));
console.log(combinedValues(55, 33));
addAndHandle(10, 20, (result) => {
  console.log(result);
});
