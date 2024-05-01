import "./scss/index.scss"

console.log("Iniciando contexto global: Página de usuário...")

const botaoCadastrar = document.getElementById("botaoCadastrar")
botaoCadastrar.addEventListener("click", executarCadastrar)

async function executarCadastrar() {
    // Cadastrar livros na API de livros

    // Entrada de dados
    const titulo = document.getElementById("titulo").value
    const descricao = document.getElementById("descricao").value

    // Processamento
    const sucesso = await cadastrarLivroNaAPI(titulo, descricao)

    // Saída de dados
    
}

async function cadastrarLivroNaAPI(titulo, descricao) {
    const url = "https://api-aula.up.railway.app/livros"
    const dados = {
        title: titulo,
        description: descricao
    }

    const resposta = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })

    if (resposta.ok) {
        return true 
    } else {
        return false
    }
}

// Exercício 1
// 1 - Adicionar evento de click no botão de execução
// 2 - Criar função de início do processo
// 3 - Criar função para envio de dados para a API
// 4 - Informar tela sobre sucesso de cadastro