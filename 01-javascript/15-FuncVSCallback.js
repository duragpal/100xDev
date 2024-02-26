// FUnction
function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function SumOfSquares(a, b) {
  let val1 = square(a);
  let val2 = square(b);
  return val1 + val2;
}
function SumOfCubes(a, b) {
  let val1 = cube(a);
  let val2 = cube(b);
  return val1 + val2;
}
console.log(SumOfCubes(2, 2));

//Using Callbacks to avoid DRY
//Use function square and cube same as that and Sumofsq and sumofcube would change
function Sum(a, b, fn) {
  val1 = fn(a);
  val2 = fn(b);
  return val1 + val2;
}
console.log(Sum(2, 2, cube));
