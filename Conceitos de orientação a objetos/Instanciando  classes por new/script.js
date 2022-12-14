
/*

CONSTRUTOR POR NEW:

Em muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS também

*/

function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.latir = function() {
        console.log("Au Au")
    }
}

let husky = new Cachorro("husky", 4, "Preto")
console.log(husky)
husky.latir()

//----------------------------------------------


function State(population, capital, pib) {
    this.population = population
    this.capital = capital
    this.pib = pib
    this.localation = function() {
        console.log("Estado Brasileiro")
    }
}

let rioGrandeDoSul = new State("27 milhões", "Porto Alegre", 324435)
console.log(rioGrandeDoSul)
rioGrandeDoSul.localation()


//----------------------------------------------


function carsBrand(brand, name, motor, hp) {
    this.brand = brand
    this.name = name
    this.motor = motor
    this.hp = hp
    this.auto = function() {
        console.log("This's a car")
    }
}

let landRover = new carsBrand("Land Rover", "Discolvery", 4.0, 300)
console.log(landRover)
landRover.auto()

let corsa = new carsBrand("Chevrolet", "Corsa", 1.0, 70)
console.log(corsa)
corsa.auto()