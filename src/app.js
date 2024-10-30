// Importa as classes para definir tipos de entidades principais do sistema: Cliente, Funcionario, Servico e Vidro
import Cliente from './Classes/Pessoas/Cliente.js';
import Funcionario from './Classes/Pessoas/Funcionario.js';
import Servico from './Classes/Produtos/Servico.js';
import Vidro from './Classes/Produtos/Vidro.js';

// Importa funções de cadastro que inicializam as instâncias de cada entidade e as adicionam nos vetores específicos
import cadastro_cliente from './Funcoes/Cadastro/cadastro_cliente.js';
import cadastro_funcionario from './Funcoes/Cadastro/cadastro_funcionario.js';
import cadastro_servico from './Funcoes/Cadastro/cadastro_servico.js';
import cadastro_vidro from './Funcoes/Cadastro/cadastro_vidro.js';

// Importa funcoes relativas ao modal, que manipula eventos relacionados ao css
import mostrarModal from './Funcoes/Modal/mostrarModal.js'
import ocultarModal from './Funcoes/Modal/ocultarModal.js';

// Importa funcoes relativas a limpeza de campos (input)
import limparCampoCliente from './Funcoes/Limpeza de Campos/limparCampoCliente.js';
import limparCampoFuncionario from './Funcoes/Limpeza de Campos/limparCampoFuncionario.js';
import limparCampoServico from './Funcoes/Limpeza de Campos/limparCampoServico.js';
import limparCampoVidro from './Funcoes/Limpeza de Campos/limparCampoVidro.js';

// Importa funcoes relativas à validacao de campo
import validarNome from './Funcoes/Validacao/validacaoNome.js'
import validarEmail from './Funcoes/Validacao/validacaoEmail.js';

// Declaração de vetores para armazenar instâncias de diferentes tipos de dados
let pessoas = [];         // Armazena todas as pessoas (clientes e funcionários) criadas no sistema
let clientes = [];         // Armazena apenas as instâncias da classe Cliente
let funcionarios = [];     // Armazena apenas as instâncias da classe Funcionario
let produtos = [];         // Armazena produtos disponíveis no sistema, incluindo vidros e outros itens
let servicos = [];         // Armazena os serviços oferecidos
let vidros = [];           // Armazena os vidros cadastrados, uma categoria específica de produto

// Botoes do html
let buttonCadastrarCliente = document.getElementById('buttonCadastrarCliente');
let buttonCadastrarFuncionario = document.getElementById('buttonCadastrarFuncionario');
let buttonCadastrarServico = document.getElementById('buttonCadastrarServico');
let buttonCadastrarVidro = document.getElementById('buttonCadastrarVidro');

// Botoes do html relacionados ao modal
let buttonMostrarModalCliente = document.getElementById('mostrarModalCliente');
let buttonMostrarModalFuncionario = document.getElementById('mostrarModalFuncionario');
let buttonMostrarModalVidro = document.getElementById('mostrarModalVidro');
let buttonMostrarModalServico = document.getElementById('mostrarModalServico');

// Modais do html
let modalCliente = document.getElementById('modalCliente');
let modalFuncionario = document.getElementById('modalFuncionario');
let modalServico = document.getElementById('modalServico');
let modalVidro = document.getElementById('modalVidro');

// Cadastro das instancias das classes importadas
buttonCadastrarCliente.addEventListener('click', function() {
    let idCliente = document.getElementById('idCliente').value;
    let nomeCliente = document.getElementById('nomeCliente').value;
    let telefoneCliente = document.getElementById('telefoneCliente').value;
    let emailCliente = document.getElementById('emailCliente').value;
    let cpfCliente = document.getElementById('cpfCliente').value;
    let cepCliente = document.getElementById('cepCliente').value;

    if(!validarNome(nomeCliente)) {
        return;
    }

    if(!validarEmail(emailCliente)) {
        return
    }

    cadastro_cliente(Cliente, clientes, pessoas, idCliente, nomeCliente, telefoneCliente, emailCliente, cpfCliente, cepCliente);

    limparCampoCliente('Cliente')

    console.log("Clientes cadastrados:", clientes);
})

buttonCadastrarFuncionario.addEventListener('click', function() {
    let idFuncionario = document.getElementById('idFuncionario').value;
    let nomeFuncionario = document.getElementById('nomeFuncionario').value;
    let telefoneFuncionario = document.getElementById('telefoneFuncionario').value;
    let emailFuncionario = document.getElementById('emailFuncionario').value;
    let cargoFuncionario = document.getElementById('cargoFuncionario').value;
    let dataAdmissaoFuncionario = document.getElementById('dataAdmissaoFuncionario').value;

    // Chama a função de cadastro com os valores capturados
    cadastro_funcionario(Funcionario, funcionarios, pessoas, idFuncionario, nomeFuncionario, telefoneFuncionario, emailFuncionario, cargoFuncionario, dataAdmissaoFuncionario);

    limparCampoFuncionario('Funcionario')

    // Exibe no console para confirmação
    console.log("Funcionários cadastrados:", funcionarios);
});


// Função de cadastro para o botão de serviço
buttonCadastrarServico.addEventListener('click', function() {
    let idServico = document.getElementById('idServico').value;
    let nomeServico = document.getElementById('nomeServico').value;
    let descricaoServico = document.getElementById('descricaoServico').value;
    let precoServico = document.getElementById('precoServico').value;

    // Chama a função de cadastro com os valores capturados
    cadastro_servico(Servico, servicos, produtos, idServico, nomeServico, descricaoServico, precoServico);

    limparCampoServico('Servico')

    // Exibe no console para confirmação
    console.log("Serviços cadastrados:", servicos);
});

// Função de cadastro para o botão de vidro
buttonCadastrarVidro.addEventListener('click', function() {
    let idVidro = document.getElementById('idVidro').value;
    let nomeVidro = document.getElementById('nomeVidro').value;
    let descricaoVidro = document.getElementById('descricaoVidro').value;
    let precoVidro = document.getElementById('precoVidro').value;
    let qtdEstoqueVidro = document.getElementById('qtdEstoqueVidro').value;
    let dimensaoVidro = document.getElementById('dimensaoVidro').value;
    let tipoVidro = document.getElementById('tipoVidro').value;

    // Chama a função de cadastro com os valores capturados
    cadastro_vidro(Vidro, vidros, produtos, idVidro, nomeVidro, descricaoVidro, precoVidro, qtdEstoqueVidro, dimensaoVidro, tipoVidro);

    limparCampoVidro('Vidro')

    // Exibe no console para confirmação
    console.log("Vidros cadastrados:", vidros);
});

// Estruturas para exibir os modais na tela de acordo com o botao clicado
buttonMostrarModalCliente.addEventListener('click', function() {
    mostrarModal(modalCliente)
    ocultarModal(modalFuncionario, modalServico, modalVidro)
})

buttonMostrarModalFuncionario.addEventListener('click', function() {
    mostrarModal(modalFuncionario)
    ocultarModal(modalCliente, modalServico, modalVidro)
})
buttonMostrarModalServico.addEventListener('click', function() {
    mostrarModal(modalServico)
    ocultarModal(modalCliente, modalFuncionario, modalVidro)
})
buttonMostrarModalVidro.addEventListener('click', function() {
    mostrarModal(modalVidro)
    ocultarModal(modalCliente, modalFuncionario, modalServico)
})