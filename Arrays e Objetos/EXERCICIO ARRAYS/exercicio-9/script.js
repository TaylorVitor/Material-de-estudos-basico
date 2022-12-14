

/*

Crie um array a partir de uma frase 

imprima cada palavra do array no console por meio de um for

*/


let phrase = "Imprimir texto no console"

const arrFrase = phrase.split(" ")

for(let i = 0; i < arrFrase.length; i++) {
    console.log(arrFrase[i])
}