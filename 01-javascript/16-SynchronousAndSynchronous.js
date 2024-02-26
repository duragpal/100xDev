//SetTimeout, fs.readFile, Fetch

function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000); //gives result after 1 second
console.log("hello world");
//not so good way to make it sync i.e busy waiting given below
// function SyncSleep(){
//     let a=1;
//     for(let i=0;i<10000000;i++){
//         a++;
//     }
// }
// SyncSleep()
