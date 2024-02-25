const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth() + 1); //Month are zero indexed so add +1
console.log(currentDate.getFullYear());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
// Setting components of the date
currentDate.setFullYear(2022);
console.log("After setFullYear:", currentDate);

currentDate.setMonth(5); // Setting month to June (zero-indexed)
console.log("After setMonth:", currentDate);

// Getting and setting time in milliseconds since 1970
console.log("Time in milliseconds since 1970:", currentDate.getTime());
//epoch timestamp

const newDate = new Date(2023, 8, 15); // Creating a new date
console.log("New Date:", newDate);

//print current time
function currentTime() {
  console.log(new Date().getTime());
}
setInterval(currentTime, 1000);
