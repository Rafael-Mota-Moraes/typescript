export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto("Camiseta", 49.9);
const produto2 = new Produto("Caneca", 10.5);
const produto3 = new Produto("Caneta", 0.95);

const carrinho = new CarrinhoDeCompras();

carrinho.inserirProdutos(produto1, produto2, produto3);

console.log(carrinho.valorTotal());
