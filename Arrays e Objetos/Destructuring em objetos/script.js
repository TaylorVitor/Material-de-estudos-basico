

/*

Podemos definir variaveis com propriedades do objeto com uma notação diferente, chamada destructuring

*/

let captain = {
    name: "William",
    age: 33,
    flightHours: 4000,
}

const {name: name, flightHours: flightHours, age: age} = captain

console.log(`Captain's name is ${name}`)
console.log(`his age is ${age}`)
console.log(`He has flighthours expirence ${flightHours} hours`)




const cars = {
    landRover: "Evoque",
    merceedes: "AMG",
    vw: "Gol"
}

const {landRover: landRover, merceedes: merceedes, vw:vw} = cars

console.log(landRover)
console.log(merceedes)
console.log(vw)