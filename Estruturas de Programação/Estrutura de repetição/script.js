


/* 
O que são estruturas de repetição 

A ideia é repetir uma ação até atingir uma função

Ao invés de repertimos o mesmo código várias vezes, criamos um statement 
que fará uma checagem em cada loop.

tambám chamada de loop

*/


let a = 0

while(a < 100) {
    console.log(a)
    a++
}

let word = "Envenamento"

for(let i = 0; i < word.length; i++) {
    console.log(word[i])
}

for(let number = 0; number <= 100; number++) {
    console.log(number)
}

for(let ano = 2022; ano > 1970; ano--) {
    console.log(ano)
}

for(let pos = 0; pos <= 100; pos = pos + 2) {
    console.log(`Tabuada do 2 é ${pos}`)
}