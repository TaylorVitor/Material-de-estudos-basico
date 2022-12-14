
/*

MÉTODOS

Propriedades que servem como funções,
Ou seja, as ações dos objetos;
Invocamos os métodos da mesma maneira que funções

*/

const cachorro = {
    latir: function() {
        console.log("Auuuuuuu")
    },

    rosnar: function() {
        console.log("Grrrarrr")
    }
}

cachorro.latir()
cachorro.rosnar()



const liveHouse = {
    house: function() {
        let house = "Casa"
        for(let i = 0; i < house.length; i++) {
            console.log(house[i])
        }
    },

    apartamento: function() {
        for(apartamento = 0; apartamento < 20; apartamento++) {
            console.log("apartamento")
        }
    }
}

liveHouse.house()
liveHouse.apartamento()