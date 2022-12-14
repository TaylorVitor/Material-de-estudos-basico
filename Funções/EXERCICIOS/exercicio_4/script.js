

/*

Escreva uma função que retorne um numero aleatorio

o numero maximo retornado deve ser passado via parametro
Math.random()

*/

function randomNumber(num) {
    return Math.floor(Math.random() * num) + 1
}

console.log(randomNumber(10))
console.log(randomNumber(50))
console.log(randomNumber(100))