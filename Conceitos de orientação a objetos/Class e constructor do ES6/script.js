
/*

CONSTRUTOR NA CLASSES 

Com a versão de ES6, uma possibilidade de criar uma classe(Objeto)
com construtor foi adicionada;
Então não precisamos mais criar por meio de uma função

*/


class car{
    constructor(name, brand, tyres, crewQuantity){
        this.name = name
        this.brand = brand
        this.tyres = tyres
        this.crewQuantity = crewQuantity
    }
}

let audi = new car("A4", "Audi", 4, 4)

console.log(audi)


//---------------------------------------------------

class State {
    constructor(name, capital, population, pib) {
        this.name = name
        this.capital = capital
        this.population = population
        this.pib = pib
        
    }
}

let sp = new State("São Paulo", "São Paulo", 30.000000, "5000 Bilhões")
console.log(sp)