function validarEmail(email) {
    let posicaoArroba = email.indexOf('@')

    if(posicaoArroba <= 0) {
        alert("Insira um email correto")
        return false
    }
    return true
}

export default validarEmail