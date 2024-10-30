function limparCampoCliente(cliente) {
    document.getElementById(`id${cliente}`).value = "";
    document.getElementById(`nome${cliente}`).value = "";
    document.getElementById(`telefone${cliente}`).value = "";
    document.getElementById(`email${cliente}`).value = "";
    document.getElementById(`cpf${cliente}`).value = "";
    document.getElementById(`cep${cliente}`).value = "";
}

export default limparCampoCliente;