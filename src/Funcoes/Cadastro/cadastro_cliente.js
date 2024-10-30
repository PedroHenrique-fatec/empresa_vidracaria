function cadastro_cliente(Cliente, vetor_clientes, vetor_pessoas, id, nome, telefone, email, cpf, cep) {
    let novo_cliente = new Cliente(id, nome, telefone, email, cpf, cep)

    vetor_clientes.push(novo_cliente)
    vetor_pessoas.push(novo_cliente)
}

export default cadastro_cliente