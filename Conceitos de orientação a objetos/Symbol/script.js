

/*

Propriedades únicas, que não podem ser alternadas e nem criadas duas vezes
Podemos utilizar como uma constante, só que para propriedade de objeto;

*/

class dog {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    bark() {
        console.log("AU AU")
    } 
}

let paws = Symbol()

dog.prototype[paws] = 4


let labrador = new dog("Labrador", "Black")
console.log(labrador)

console.log(dog.prototype[paws])
console.log(labrador[paws])