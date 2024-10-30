function validarNome(nome) {
    // Verifica se o nome é vazio ou começa com espaço
    if (!nome || nome.trim() === "") {
        alert("Insira um nome válido");
        return false; // Nome inválido
    }
    return true; // Nome válido
}

export default validarNome;
