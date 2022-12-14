
/*

Uma coleção de propriedades, parecidos com arrays, 

*/

let personInfo = {
    nome: "Pedro",
    age: 21,
    nacionalidade: "Brasileiro"
}

console.log(personInfo.nome)

delete personInfo.nome

console.log(personInfo)

personInfo.casado = false

console.log(personInfo.casado)
