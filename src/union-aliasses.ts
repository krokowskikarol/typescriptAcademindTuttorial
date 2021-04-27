// function add(num1:number, num2:number, printResult:boolean){

//     if(printResult){
//         console.log("This is: "+ (num1 + num2));
//     }else{
//     return num1+num2;}
// }
// let number1 = 5;
// const number2 = 2.8;
// // const result = add(+number1,+number2, true);
// add(+number1,+number2, true);

// const person: { name: string; age: number; hobbies: string[]; role: string } = {
//   name: "karol",
//   age: 31,
//   hobbies: ["sports", "coocking"],
//   role: "READ ONLY USER",
// };
// console.log(person);

type Combinable = number | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  threatAs: "as-text" | "as-number" = "as-text"
) {
  let result;
  if (
    threatAs === "as-number" ||
    (typeof input1 === "number" && typeof input2 === "number")
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(1, 2));
console.log(combine(1, 2, "as-text"));
console.log(combine("1", "2", "as-number"));
console.log(combine("1", "2"));
