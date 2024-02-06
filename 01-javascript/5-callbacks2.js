// function calculateArithmetic(a, b, type) {
//   if (type == "sum") {
//     const value = sum(a, b);
//     return value;
//   }
//   if (type == "minus") {
//     const value = minus(a, b);
//     return value;
//   }
// }
// function sum(a, b) {
//   return a + b;
// }
// function minus(a, b) {
//   return a - b;
// }
// const value = calculateArithmetic(1, 2, "sum");
// console.log(value);
// Suppose you're not allowed to use if statement here.
function calculateArithmetic(a, b, arithmeticFinalFn) {
  const ans = arithmeticFinalFn(a, b);
  return ans;
}
function sum(a, b) {
  return a + b;
}

const value = calculateArithmetic(1, 2, sum);
console.log(value);
