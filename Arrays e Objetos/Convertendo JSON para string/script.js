


let person = {
    "name": "Pedro",
    "age": 32,
    "work": "Develop",
    "languagens": ["PHP", "Javascript", "Java", "Html", "Css"] 
}

console.log(person)

let personInString = JSON.stringify(person)

console.log(personInString)

let personInObj = JSON.parse(personInString)

console.log(personInObj)
 