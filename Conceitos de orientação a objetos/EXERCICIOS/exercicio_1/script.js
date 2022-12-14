
/*

Crie uma classe que simula uma conta no banco

Deve conter a propriedade saldo
e os metodos deposito e saque 

teste os metodos

*/

class conta{
    constructor(saldo) {
        this.saldo = saldo
    }

    deposito(valor) {
        this.saldo += valor
    }

    saque(valor) {
        this.saldo -= valor
    }
}

let conta1 = new conta(1000)
conta1.deposito(1000)
console.log(conta1.saldo)

conta1.saque(500)

console.log(conta1.saldo)

