import Pessoa from "./Pessoa.js";

class Funcionario extends Pessoa {
    constructor(id, nome, telefone, email, cargo, data_admissao) {
        super(id, nome, telefone, email)
        this.cargo = cargo
        this.data_admissao = data_admissao
    }

    fazerServico(cliente, servico) {
        return `O funcionario de nome: ${this.nome} realizou o servico ${servico.nome} para o cliente: ${cliente.nome} pelo preco de R$ ${servico.preco}`
    }

    venderProduto(cliente, produto) {
        return `O funcionario de nome: ${this.nome} vendeu o produto ${produto.nome} para o cliente ${cliente.nome} pelo preco de R$ ${produto.preco}`;
    }
}

export default Funcionario