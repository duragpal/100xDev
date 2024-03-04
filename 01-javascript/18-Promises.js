// const fs = require("fs"); //filesystem module

// //Sync fn
// function YouReadFile(cb) {
//   fs.readFile("file.txt", "utf-8", function (err, data) {
//     cb(data);
//   });
// }

// //callback fn to call
// function onDone(data) {
//   console.log(data);
// }
// YouReadFile(onDone);
// Above can be implemented using Promises as:
const fs = require("fs");
//sYNC function
function YouReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("file.txt", "utf-8", function (err, data) {
      cb(data);
    });
  });
}
//callback fn
function onDone(data) {
  console.log(data);
}
YouReadFile().then(onDone);
