interface IProduto {
    nome: string
    preco: number
    qntdEstoque: number
}

class CarrinhoDeCompras {
    private produtos: IProduto[] = []

    adicionarProduto(produto: IProduto) : void {
        this.produtos.push(produto)
    }

    calcularTotal(): number{
        return this.produtos.reduce((total, produto) => total + produto.preco, 0)
    }
}

// TESTANDO CÓDIGO

const produto1: IProduto = { nome: 'Teclado', preco: 150, qntdEstoque: 20 };
const produto2: IProduto = { nome: 'Mouse', preco: 80, qntdEstoque: 15 };

const carrinho = new CarrinhoDeCompras()
carrinho.adicionarProduto(produto1)
carrinho.adicionarProduto(produto2)
console.log(carrinho.calcularTotal())


