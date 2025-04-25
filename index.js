
const user = {
    firstName: "Abid",
    lastName: "Asif",
    course: " JavaScript",
    sectionNumber: 115,
    role: "student"
};
console.log("JavaScript Object:");
console.log(user);

const userJSON = JSON.stringify(user, null, 2);
console.log("\nJSON Format:");
console.log(userJSON);