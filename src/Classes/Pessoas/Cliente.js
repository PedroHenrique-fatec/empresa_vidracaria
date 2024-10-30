import Pessoa from './Pessoa.js'

class Cliente extends Pessoa {
    constructor(id, nome, telefone, email, cpf, cep) {
        super(id, nome, telefone, email);
        this.cpf = cpf;
        this.cep = cep;
    }

    comprarProduto(funcionario, produto) {
        // O this faz referencia à propria instacia que esta chamando este metodo
        let venda = funcionario.venderProduto(this, produto)

        return `${venda}. Compra realizada com sucesso.`;
    }
}

export default Cliente