
/*

Crie um objeto que simule um endereço de um cliente

propriedades: Rua, Bairro, Cidade e estado

No contrutor o endereço já deve ser definido por completo

Crie métodos para atualizar todas as propriedades


*/

class endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set novaRua(novaRua) {
        this.rua = novaRua
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade
    }

    set novaEstado(novaEstado) {
        this.estado = novaEstado
    }
}

let adress = new endereco("Rua gaviota", "Centro", "Palhoça", "SC")
console.log(adress)

adress.novaRua = "Rua Mario Ribas"
adress.novoBairro = "Faganello"
adress.novaCidade = "Belo Horizonte"
adress.novaEstado = "Minas Gerais"
console.log(adress)
