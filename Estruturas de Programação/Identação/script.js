


/* 
O que Identação

Serve para organizar o código e deixar mais legível

Não há uma regra, mais cada bloco aninhado deve ser identado uma vez.

*/

let x = 0
let y = 0

if(x === 0 && y === 0) {
    let z = 5
    if(z > 2) {
        console.log(z)
        for(let i = 0; i < 5; i = i + 1) {
            if(i === 2) {
                console.log("I é = 2")
            }
        }
    }
}