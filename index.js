import "./scss/index.scss"

console.log("Iniciando contexto global: Página de usuário...")

const botaoCadastrar = document.getElementById("botaoCadastrar")
botaoCadastrar.addEventListener("click", executarCadastrar)

async function executarCadastrar() {
    // Cadastrar livros na API de livros

    // Entrada de dados
    const titulo = document.getElementById("titulo").value
    const descricao = document.getElementById("descricao").value

    // Validação de dados
    if(titulo == "") {
        const divResultado = document.getElementById("resultado")
        divResultado.style.display = "block"
        divResultado.innerHTML = "O título do livro é obrigatório."
        divResultado.style.backgroundColor = "red"
    }

    // Processamento
    const sucesso = await cadastrarLivroNaAPI(titulo, descricao)

    // Saída de dados
    if(sucesso == true) {
        const divResultado = document.getElementById("resultado")
        divResultado.style.display = "block"
        divResultado.innerHTML = "Livro cadastrado com sucesso."
        divResultado.style.backgroundColor = "green"
    }
    
}

async function cadastrarLivroNaAPI(titulo, descricao) {
    const url = "https://api-aula.up.railway.app/livros"
    const corpoDaRequisicao = {
        title: titulo,
        description: descricao
    }

    const resposta = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpoDaRequisicao)
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