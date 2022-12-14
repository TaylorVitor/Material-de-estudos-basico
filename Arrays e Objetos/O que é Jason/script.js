

/*

JSON = Javascript Object Notation

Utilizando a comunicação  entre serviços: back end e front end


*/

let person = {
    "name": "Junior",
    "age": 22
} 

console.log(person.name)
console.log(person.age)



const city = {
    name: "St.louis",
    population: 339821,
    mayor: "Josh Meneghine",
    ageCity: 90
}

console.log(city)

const cityApis = JSON.stringify(city)

console.log(cityApis)

const cityObjt = JSON.parse(cityApis)

console.log(cityObjt)