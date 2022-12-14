
/*

Crie uma classe conta bancaria;
Com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança 

Crie os métodos de depositos e saques, também um metodo para transferir dinheiro 
da poupança para a corrente.

Além disso crie uma conta especial que herda da conta normal 

Na conta especial os juros são dobrados na conta normal 

*/


class conta {
    constructor(saldoCC, saldoCP, juros) {
        this.saldoCC = saldoCC
        this.saldoCP = saldoCP
        this.juros = juros
    }
    deposito(valor) {
        this.saldoCC += valor
    }

    saque(valor) {
        this.saldoCC -= valor
    }

    transferenciaCP(valor) {
        this.saldoCC -= valor
        this.saldoCP += valor
    }

    transferenciaCC(valor) {
        this.saldoCP -= valor
        this.saldoCC += valor
    }

    jurosDeAniversario() {
        let juros = (this.saldoCP * this.juros) / 100
        this.saldoCP += juros 
    }
}

let contaCorrente = new conta(1000, 5000, 1)
console.log(contaCorrente)

contaCorrente.saque(500)
console.log(contaCorrente)

contaCorrente.deposito(5000)
console.log(contaCorrente)

contaCorrente.transferenciaCP(3000)
console.log(contaCorrente)

contaCorrente.jurosDeAniversario()
console.log(contaCorrente)
