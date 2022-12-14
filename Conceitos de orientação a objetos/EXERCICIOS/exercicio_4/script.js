
/*

Crie uma classe que simule um carro;

Propriedades: marca,cor e gasolina restante

Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente

E um de abastecer para aumentar a gasolina quando necessário
*/

class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }

    dirigir(km) {
        let litrosConsumidos = km / this.consumo
        this.gasolinaRestante -= litrosConsumidos
    }

    abastecer(litros) {
        this.gasolinaRestante += litros
    }
}

let car = new Carro("VW", "Vermelho", 100, 14)
console.log(car)

car.dirigir(100)
console.log(car)

car.abastecer(30)
console.log(car)