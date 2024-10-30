function limparCampoServico(servico) {
    document.getElementById(`id${servico}`).value = ""
    document.getElementById(`nome${servico}`).value = ""
    document.getElementById(`descricao${servico}`).value = ""
    document.getElementById(`preco${servico}`).value = ""
}

export default limparCampoServico