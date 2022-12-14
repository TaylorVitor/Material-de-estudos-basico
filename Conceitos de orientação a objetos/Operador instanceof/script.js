
/*

inheritance

Uma classe pode herdar propriedades de outra classe por herança
para isso utilizamos extends

*/

class mamiferos{
    constructor(patas) {
        this.patas = patas
    }
}

let coiote = new mamiferos(4)
console.log(coiote.patas)


class cachorro extends mamiferos {
    constructor(patas, raca) {
        super(patas, patas)
        this.raca = raca
    }
    latir() {
        console.log("Au Au")
    }
}

let pug = new cachorro(4, "Pug")
console.log(pug.patas)

pug.latir()

console.log(new cachorro instanceof mamiferos)
console.log(coiote instanceof mamiferos)