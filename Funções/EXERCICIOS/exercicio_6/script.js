

/*

Escreva uma função que detecta o tipo de dado passado

verefica se é um boolean,number ou string.

e retorne uma mensagem para cada tipo

execute uma função para cada caso

*/

function verificaTipoDado(dado) {
    if(typeof dado === "string") {
        console.log("Isso é uma string")

    } else if(typeof dado === "number") {
        console.log("Isso é um number")

    } else if(typeof dado === "boolean") {
        console.log("Isso é um boolean")
    }
}


verificaTipoDado(20)
verificaTipoDado("Taylor")
verificaTipoDado(true)