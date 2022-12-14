
/*

Um objeto fallback de outro objeto.

Quando um objeto recebe uma requisição de uma propriedade que não tem,
ela procura no prototype do deste objeto 

O prototype de um objeto criado do zero é o objeto, que tem os métodos nativos da linguagem

*/

const person = {
    hands: 5,
}

console.log(Object.getPrototypeOf(person))
console.log(Object.getPrototypeOf(person) === Object.prototype) 

console.log(person.hasOwnProperty('hands'))