function cadastro_servico(Servico, vetor_servicos, vetor_produtos, id, nome, descricao, preco) {
    let novo_servico = new Servico(id, nome, descricao, preco)

    vetor_servicos.push(novo_servico)
    vetor_produtos.push(novo_servico)
}

export default cadastro_servico