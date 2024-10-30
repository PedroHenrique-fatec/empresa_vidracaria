
---

# Projeto Vidraçaria

Este projeto implementa um sistema de gerenciamento para uma vidraçaria, onde é possível cadastrar clientes, funcionários, produtos e serviços, além de registrar vendas e execuções de serviços. O código está organizado de forma modular, facilitando a manutenção e o crescimento do sistema.

## Estrutura do Projeto

```plaintext
-src
│
├── Classes
│   ├── Pessoas
│   │   ├── Cliente.js         # Classe para o cliente, com atributos e métodos relacionados a compras
│   │   ├── Funcionario.js     # Classe para o funcionário, incluindo métodos para realizar serviços e vendas
│   │   └── Pessoa__temp.js    # Classe base para Pessoa, que serve como modelo para Cliente e Funcionario
│   │
│   ├── Produtos
│   │   ├── Produto.js         # Classe Produto, representando um item básico para venda
│   │   ├── Servico.js         # Classe Servico, que define serviços oferecidos pela vidraçaria
│   │   └── Vidro.js           # Classe Vidro, um tipo específico de Produto
│
├── Funcoes
│   └── Cadastro
│       ├── cadastro_cliente.js      # Função para cadastrar clientes e armazená-los nos vetores apropriados
│       ├── cadastro_funcionario.js  # Função para cadastrar funcionários
│       ├── cadastro_servico.js      # Função para cadastrar serviços
│       └── cadastro_vidro.js        # Função para cadastrar vidros como produtos
│
└── app.js                     # Arquivo principal que inicializa o sistema e realiza operações de exemplo
```

## Funcionalidades

- **Cadastro de Pessoas**: Clientes e funcionários são cadastrados e armazenados em vetores, permitindo o acesso centralizado a todos os dados de pessoas no sistema.
- **Cadastro de Produtos e Serviços**: Produtos (vidros) e serviços oferecidos pela vidraçaria podem ser registrados e gerenciados.
- **Execução de Operações**: Clientes podem comprar produtos e funcionários podem realizar serviços para os clientes, simulando transações e operações reais.

## Como Executar o Projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório:
   ```bash
   git clone <URL-do-repositorio>
   ```
3. Navegue até a pasta do projeto:
   ```bash
   cd nome-do-projeto
   ```
4. Execute o arquivo `app.js` para iniciar o sistema e ver alguns exemplos de operação:
   ```bash
   node src/app.js
   ```

## Expansão do Projeto

Para adicionar novos tipos de pessoas, produtos ou serviços, você pode:

- Criar uma nova classe na pasta `Classes` conforme a categoria desejada.
- Implementar a lógica de cadastro na pasta `Funcoes/Cadastro`.
- Incluir a nova entidade em `app.js` para que seja utilizada no sistema.

## Estrutura Modular e Escalável

A organização modular facilita a adição de novas funcionalidades e promove uma estrutura limpa e escalável, separando cada responsabilidade em seu próprio módulo.

---"# empresa_vidracaria" 
