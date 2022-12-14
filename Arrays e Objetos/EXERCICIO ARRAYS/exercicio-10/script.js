

/*

Crie um objeto calculadora 

que tem os seguintes metodos somar, subtrair, multiplicar e dividir

Os métodos só devem aceitar dois parametros

Utilize cada um dos metodos e imprima os valores no console

*/


let calculadora = {
    somar: function(a,b) {
        return a + b
    },

    subtrair: function(a,b) {
        return a - b
    },

    multiplicar: function(a, b) {
        return a * b
    },

    dividir: function(a, b) {
        return a / b
    }
}

console.log(calculadora.somar(10, 10))
console.log(calculadora.subtrair(21, 10))
console.log(calculadora.multiplicar(44, 5))
console.log(calculadora.dividir(102, 5))



const calculator = {
    add: function(a, b) {
        return a + b
    },

    subtract: function(a, b) {
        return a - b
    },

    multiply: function(a, b) {
        return a * b
    },

    share: function(a, b) {
        return a / b
    }
}

console.log(calculator.add(10, 20))
console.log(calculator.subtract(102, 53))
console.log(calculator.multiply(22, 2))
console.log(calculator.share(50, 5))