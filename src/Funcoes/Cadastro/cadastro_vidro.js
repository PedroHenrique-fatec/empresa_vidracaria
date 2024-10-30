function cadastro_vidro(Vidro, vetor_vidros, vetor_produtos, id, nome, descricao, preco, qtd_estoque, dimensao, tipo) {
    let novo_vidro = new Vidro(id, nome, descricao, preco, qtd_estoque, dimensao, tipo)

    vetor_vidros.push(novo_vidro)
    vetor_produtos.push(novo_vidro)
}

export default cadastro_vidro