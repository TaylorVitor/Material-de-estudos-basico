
/*

Crie uma classe que simula um carrinho de compras de um e-commerce

propriedades itens, quntidade total, valor total;
crie os metodos para adicionar e remover os itens 

*/


class carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens
        this.qtd = qtd
        this.valorTotal = valorTotal
    }

    addItem(item) {

        let contador = 0

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id === item.id) {
                this.itens[itemCarrinho].qtd += item.qtd
                contador = 1
            }
        }

        if(contador === 0) {
            this.itens.push(item)
        }

        this.qtd += item.qtd
        this.valorTotal += item.preco * item.qtd
    }
    removerItem(item) {
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id === item.id) {

                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex(function(obj) {return obj.id === item.id})

                this.qtd -= this.itens[itemCarrinho].qtd
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd

                this.itens.splice(index, 1)

               
            }
        }
    }
}

let cart = new carrinho([
    {
        id: 01,
        name: "camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        name: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120)

console.log(cart)

cart.addItem({id: 01, name: "Camisa", qtd: 2, preco:20})

console.log(cart)

cart.addItem({id: 03, name: "Boné", qtd: 2, preco:15})

console.log(cart)


cart.removerItem({id:01, name: "Camisa", qtd:2, preco: 20})

console.log(cart)
