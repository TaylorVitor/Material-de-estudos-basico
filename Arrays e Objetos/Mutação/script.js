
/*

MUTABILITY

Um objeto pode herdar todas as caracteristicas de outro, virando uma referancia ao mesmo

*/


let pessoa = {
    nome: "Taylor",
}

let pessoa2 = pessoa

console.log(pessoa2 === pessoa)

pessoa2.nome = "Pedro"

console.log(pessoa2.nome)