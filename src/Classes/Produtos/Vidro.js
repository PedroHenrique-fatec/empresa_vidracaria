import Produto from "./Produto.js";

class Vidro extends Produto{
    constructor(id, nome, descricao, preco, qtd_estoque, dimensao, tipo) {
        super(id, nome, descricao, preco)
        this.qtd_estoque = qtd_estoque
        this.dimensao = dimensao
        this.tipo = tipo
    }

    // No metodo Get que realiza a operação
    // Torna a propriedade privada
    get preco() {
        return this._preco + (this._preco * 0.5);
    }

    // O metodo set é somente quando houver alguma alteração no atributo
    set preco(novo_preco) {
        this._preco = novo_preco
    }

}

export default Vidro