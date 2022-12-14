
/*

CONSTRUTOR COM MÉTODO

Alem de propriedades, podemos criar a classe base já com métodos.
Basta definir ao prototype o método desejado;

*/

function car(Name, brand, tyres, fuel) {
    this.Name = Name
    this.brand = brand
    this.tyres = tyres
    this.fuel = fuel
}

car.prototype.typeCar = function() {
    console.log("Carro esportivo")
}

car.prototype.carLocal = function() {
    console.log("Carro do Brasil")
}

let mercedez = new car("AMG", "Mercedez", 4, "gas")
console.log(mercedez)

mercedez.carLocal()
mercedez.typeCar()


//------------------------------------------------------


function cellPhone(marca, nome, sistema, cameras) {
    this.marca = marca
    this.nome = nome
    this.sistema = sistema
    this.cameras = cameras
}

cellPhone.localFabricado = function() {
    console.log("Celular fabricado no Brasil")
}

let meuCelular = new cellPhone("Samsung", "A52", "Android", 3)

console.log(meuCelular)
cellPhone.localFabricado()