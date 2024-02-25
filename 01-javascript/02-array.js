// Write a program to print all even numbers in an Array.
const ages = [21, 22, 23, 24, 25];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

//Write a program that prints all the male people's first name given a complex object.
const personArray = ["Ram", "Shyam", "Rita"];
const genderArray = ["Male", "Male", "Female"];
//Method 1
for (let j = 0; j < personArray.length; j++) {
  if (genderArray[j] == "Male") {
    console.log(personArray[j]);
  }
}
//Method 2 OBJECTS
const user1 = {
  Firstname: "Ram",
  gender: "Male",
};
console.log(user1["Firstname"]);

// Array of Objects
const allUsers = [
  { firstName: "Durag", gender: "Male" },
  { firstName: "Raman", gender: "Male" },
  { firstName: "Priya", gender: "Female" },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "Male") {
    console.log(allUsers[i]["firstName"]);
  }
}
