import Produto from "./Produto.js";

class Servico extends Produto {
    constructor(id, nome, descricao, preco, tipo) {
        super(id, nome, descricao, preco)
        this.tipo = tipo
    }

}

export default Servico