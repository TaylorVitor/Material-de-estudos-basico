

let num = 3
let division = 0

for(let i = 1; i <= num; i++) {
    if(num % i === 0) {
        division++
    }
}

if(division === 2) {
    console.log(`O numero ${num} é primo`)

} else {
    console.log(`O numero ${num} não é primo`)
}