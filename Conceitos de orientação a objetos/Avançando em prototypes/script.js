
/*

Um objeto fallback de outro objeto.

Quando um objeto recebe uma requisição de uma propriedade que não tem,
ela procura no prototype deste objeto 

O prototype de um objeto criado do zero é o objeto, que tem os métodos nativos da linguagem

*/

const person = {
    hands: 5,
}

const pessoaNova = Object.create(person)

console.log(pessoaNova.hands)

console.log(pessoaNova.hasOwnProperty('hands'))

console.log(Object.getPrototypeOf(pessoaNova) === person)

