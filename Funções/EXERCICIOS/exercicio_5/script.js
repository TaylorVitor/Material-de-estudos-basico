

/*

Escreva uma função que recebe a idade de uma pessoa.

Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso.

Se ela tem menos de 18 anos, ela não pode, imprima outra mensagem com este aviso.

execute a função nos dois casos.

*/


function ageToDrive(age) {
    if(age >= 18) {
        console.log("Você pode dirigir")

    } else {
        console.log("Você não pode dirigir")
    }
}

ageToDrive(20)