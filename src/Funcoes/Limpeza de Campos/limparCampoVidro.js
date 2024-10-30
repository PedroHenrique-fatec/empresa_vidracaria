function limparCampoVidro(vidro) {
    document.getElementById(`id${vidro}`).value = ""
    document.getElementById(`nome${vidro}`).value = ""
    document.getElementById(`descricao${vidro}`).value = ""
    document.getElementById(`preco${vidro}`).value = ""
    document.getElementById(`qtdEstoque${vidro}`).value = ""
    document.getElementById(`dimensao${vidro}`).value = ""
    document.getElementById(`tipo${vidro}`).value = ""
}

export default limparCampoVidro;