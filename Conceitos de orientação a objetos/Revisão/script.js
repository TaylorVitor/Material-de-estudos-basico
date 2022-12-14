

class banco{
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

let conta = new banco(348)
conta.deposito(1421)
console.log(conta.saldo)

conta.saque(653) 
console.log(conta.saldo)