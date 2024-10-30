function cadastro_funcionario(Funcionario, vetor_funcionarios, vetor_pessoas, id, nome, telefone, email, cargo, data_admissao) {
    let novo_funcionario = new Funcionario(id, nome, telefone, email, cargo, data_admissao);

    vetor_funcionarios.push(novo_funcionario);
    vetor_pessoas.push(novo_funcionario)
}

export default cadastro_funcionario