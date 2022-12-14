
/*

Possibilta adicionar um conjunto de valores a uma variavel

*/

let carInfo = {
    nome: "Vw",
    portas: 4,
    portamals: 400,
    motor: "2.0"
}

let adicionais = {
    tetoSolar: true,
    arcondicionado: true
}

console.log(carInfo)

Object.assign(carInfo, adicionais)

console.log(carInfo)