

function Soma3Numeros(x, y, b) {
    return x * y * b
}

let result = Soma3Numeros(2,6,9)

console.log(`O resultado da soma é ${result}`)


function driveLicence(age, cnh) {
    if(age >= 18 && cnh === true) {
        console.log("Você pode dirigir")

    } else {
        console.log("Você não pode dirigir")
    }
}

driveLicence(18,true)
driveLicence(18,false)