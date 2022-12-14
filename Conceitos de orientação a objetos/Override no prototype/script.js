
/*

Override nas propriedades do prototype

Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no prototype;
Podemos substituir a do prototype;

*/

class cachorro{
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() {
        console.log("Au AU")
    }
}

cachorro.prototype.raca = "Sem raça"
cachorro.prototype.raca = 4

let labrador = new cachorro("Labrador", "Preto")
console.log(labrador)
labrador.latir()

console.log(cachorro.prototype.raca)
console.log(labrador.raca)