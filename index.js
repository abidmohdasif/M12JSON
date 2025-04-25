let submit = document.getElementById("submit")
let first = document.getElementById("firstName")
let last = document.getElementById("lastName")
let course = document.getElementById("course")
let section = document.getElementById("sectionNsame")
let role = document.getElementById("role")

let person = {}

submit.addEventListener("click", () =>  {
    person.first = first.value
    person.last = last.value
    person.course = course.value
    person.section = section.value
    person.role = role.value

    console.log("Person Object: ")

    console.log(person)

    console.log("")

    console.log("JSON format: ")

    let x = JSON.stringify(person)
    console.log(x)})