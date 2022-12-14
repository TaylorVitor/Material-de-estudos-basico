



let idade = prompt("Qual a sua idade?")

function personAge() {
    if(idade >= 18) {
        console.log("Você pode entrar na auto escola")

    }  else if(idade < 18) {
        console.log("Você não pode dirigir")
    }
}


personAge(idade)