function AsyncFn() {
  let p = new Promise(function (resolve) {
    // some async logic
    setTimeout(function () {
      resolve("Hi there!");
    }, 1000);
  });
  return p;
}

async function main() {
  //no callbacks and .then
  let value = await AsyncFn();
  console.log(value);
}
main();
