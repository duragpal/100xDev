function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  //   return result;
  fnToCall(result);
}
function displayResult(data) {
  console.log("Result of the sum is " + data);
}
function displayResultPassive(data) {
  console.log("Sum's result is " + data);
}
//call only one function and how would you displayResult of a sum
//first approach
// const ans = sum(1, 2);
// displayResult(ans);
// second appoach: pass functions in func sum(num1,num2)
const ans = sum(1, 2, displayResult);
