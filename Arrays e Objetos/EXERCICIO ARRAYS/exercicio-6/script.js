

/*

Crie dois array, um com mais de 5 elementos e outro com menos 

Faça uma função que verifica o números de elementos 

se possui menos de 5, imprima "Poucos elementos" no console

se tiver mais, imprima "Muitos elementos"

*/


let cities = ["São Paulo", "Natal", "Pelotas", "Novo Humburgo", "Ijui", "Campinas"]

let states = ["SP", "MG"]

function verifyOfArray(arr) {
    if(arr.length >= 5) {
        console.log("Muito elementos")

    } else {
        console.log("Muito pouco elemetos")
    }
}


verifyOfArray(cities)
verifyOfArray(states)