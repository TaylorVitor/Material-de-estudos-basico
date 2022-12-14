

/*

Escreva uma função que recebe um numero, e o decremento de 1 em 1 com um loop

Além disso imprima somente os numeros pares do console

*/


function iparNumbers(num) {
    for(let i = num; i >= 0; i--){
        if(i % 2 === 0) {
            console.log(i)
        }
    }
}

iparNumbers(100)
