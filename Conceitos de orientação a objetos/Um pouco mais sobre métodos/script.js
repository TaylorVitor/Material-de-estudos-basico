
/*

Normalmente os mátodos interagem com os objetos;

Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido.

*/


const dog = {
    setbreed: function(breed) {
        this.breed = breed
    },

    getBreed: function() {
        return "A raça é " + this.breed
    }
}

dog.setbreed("Pastor alemão")
console.log(dog.breed)

console.log(dog.getBreed())

//---------------------------------


let person = {
    name: "",
    setNome: function(newName) {
        this.name = newName
    },
    getName: function() {
        return "O nome da pessoa é " + this.name
    }
}

person.setNome("João")

console.log(person.getName())


//----------------------------------



const cars = {
    carName: "",
    setCarName: function(NewNameCar) {
        this.carName = NewNameCar
    },
    getNameCar: function() {
        return "O nome do carro é " + this.carName
    }
}

cars.setCarName(prompt("Qual o nome do carro?"))
console.log(cars.getNameCar())


