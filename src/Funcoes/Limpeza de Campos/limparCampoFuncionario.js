function limparCampoFuncionario(funcionario) {
    document.getElementById(`id${funcionario}`).value = ""
    document.getElementById(`nome${funcionario}`).value = ""
    document.getElementById(`telefone${funcionario}`).value = ""
    document.getElementById(`email${funcionario}`).value = ""
    document.getElementById(`cargo${funcionario}`).value = ""
    document.getElementById(`dataAdmissao${funcionario}`).value = ""
}

export default limparCampoFuncionario