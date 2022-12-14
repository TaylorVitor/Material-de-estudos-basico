


/* 
 
Quando a necessidade de varios ifs podemos utilizar Switch/Case

Para sair de um case podemos utilizar o break

Podemos inserir um valor Default caso nenhum valor seja inserido
*/

let nome = "Matheus"

switch(nome) {
    case "Matheus":
        console.log("Nome matheus")
        break

    case "João":
        console.log("Nome João")
        break

    default:
        console.log("Nenhuma resposta")
        break
}

if(nome === "Matheus") {
    console.log("Nome matheus")

} else if(nome === "Breno") {
    console.log("Nome breno")

} else {
    console.log("Ninguem respondeu")
}