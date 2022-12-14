
/*

Get e set

Get: serve para resgatar um valor de uma propriedade

Setter: Serve para alterar o valor de uma propriedade 

*/

class dog {
    constructor(breed, color){
        this.breed = breed
        this.color = color
    }

    bark() {
        console.log("Au Au")
    }

    get getColor() {
        return this.color
    }

    set setColor(color) {
        this.color = color
    }

}

let shepHerd = new dog("Germany shepherd", "Undefined")
console.log(shepHerd)


shepHerd.setColor = "Brown"
console.log(shepHerd.getColor)