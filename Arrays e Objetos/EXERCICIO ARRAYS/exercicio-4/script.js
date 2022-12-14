

/*

Adicione a propriedade janelas no ônibus, com o valor de 20,

Delete a propriedade rodas;

Imprima a propriedade janelas no console

*/


let bus = {
    wheels: 8,
    maxCrew: 40,
    doors: 2
}

console.log(bus)

delete bus.doors

bus.windows = 30

console.log(bus)