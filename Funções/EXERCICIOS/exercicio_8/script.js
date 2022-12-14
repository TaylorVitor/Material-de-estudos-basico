

/*

Escreva uma função que receba uma string 

Se o texto conter mais de 10 caracteres, impima "texto muito longo"

*/


function checkText(text) {
    if(text.length > 10) { 
        console.log("Texto muito longo")

    } else {
        console.log("Texto dentro do limite")
    }
}

checkText("sws")
checkText("swsdedtbhhydew")
checkText("sweds")