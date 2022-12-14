
/*

Construtor por função

Construtores são formas de instanciar uma classe em uma 
linguagem de programação.

Instanciar é igual criar um objeto novo.

No construtor já podemos definir propriedades

*/

function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.patas = patas
    cachorro.cor = cor
    cachorro.latir = function() {
        console.log("Au au")
    }
    return cachorro
}

let labrador = criarCachorro("Labrador", 4, "Preto")

console.log(labrador)
labrador.latir()

//---------------------------------------------------


function busInfo(name, hp, windows, wheels, crewQuantiy) {
    let bus = Object.create({})
    bus.name = name
    bus.hp = hp
    bus.windows = windows
    bus.wheels = wheels
    bus.crewQuantiy = crewQuantiy
    return bus
}

let agrale = busInfo("Agrale", 120, 30, 8, 50)
console.log(agrale)


//------------------------------------------------------

function homeIlive(sale, room, kitchen, bathroom, backYard) {
    let home = Object.create({})
    home.sale = sale
    home.room = room
    home.kitchen = kitchen
    home.bathroom = bathroom
    home.backYard = backYard
    home.accounts = function() {
        console.log("O cuca paga as contas aqui")
    }
    return home
}

let myHouse = homeIlive("Couch", "Laptop", "Microwave", "discharge", "trees")

console.log(myHouse)
myHouse.accounts()