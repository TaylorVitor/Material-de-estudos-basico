
/*

CLASSES 
O prototype do Javascript pode ser chamado de class é um molde de um objeto.
Ou seja, Podemos criar diversos objetos em cima de um prototype.

*/


let cachorro = {
    raca: "indefinido",
}

let pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor alemão"

console.log(pastorAlemao.raca)

//----------------------------------------------

let gato = {
    patas: 4,
    raca: "",
    miar: function() {
        console.log("miau miau")
    }
}

let bombayCat = Object.create(gato)

bombayCat.miar()

bombayCat.raca = "Bombay"

console.log(bombayCat.raca)

let persian = Object.create(gato)

persian.raca = "Persia"
console.log(persian.raca)

//-----------------------------------------------

let car = {
    name: "", 
    doors: "",
    HP: "",
    motor: function() {
        console.log(`Motor firefy`)
    }
}

let civic = Object.create(car)

civic.name = "Honda Civic"
console.log(civic.name)

let twoDors = Object.create(car)

twoDors.doors = 4
console.log(twoDors.doors)

let housePower = Object.create(car) 

housePower.HP = 400
console.log(housePower.HP)

let firefy = Object.create(car)

firefy.motor() 
