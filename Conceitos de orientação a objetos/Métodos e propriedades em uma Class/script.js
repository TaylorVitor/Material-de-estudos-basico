

/*

Não podemos adicionar propriedades na classe, só via prototype.
A classe só aceita métodos;

*/

class cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }
    latir() {
        console.log("Au AU")
    }
}


cachorro.prototype.patas = 4

let labrador = new cachorro("Labrador", "Preto")
console.log(labrador)
console.log(labrador.patas)

//--------------------------------------------------------

class car {
    constructor(name, brand, maxCrew) {
        this.name = name
        this.brand = brand
        this.maxCrew = maxCrew
    }
    typeCar(){
        console.log("Sport")
    }
}

car.prototype.tyre = 4

let ca1 = new car("Clk", "Mercedez", 4)
console.log(ca1)
console.log(ca1.tyre)
ca1.typeCar()




class State {
    constructor(name,population, capital, pib) {
        this.name = name
        this.population = population
        this.capital = capital
        this.pib = pib
    }
    local() {
        console.log("brazilian state")
    }
}

State.prototype.idh = 532.32

let parana = new State("Parana", 39393, "Londrina", 684943)
console.log(parana)
console.log(parana.idh + " IDH")
parana.local()
