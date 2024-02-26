const fs = require("fs"); //filesystem module

fs.readFile("file.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("Hello world!"); //It prints first and then readFile data is printed... ASYNC
//TAKES LONG TIME FOR IT

let a = 0;
for (let i = 0; i < 10000000; i++) {
  a++;
}
console.log("hi there 222222");
