import "./scss/cliente.scss"

console.log("Iniciando contexto global: Página de cliente...")

// Exercício 2
// 0 - Ler todo o código e entender o que falta
// 1 - Adicionar pontos faltantes, como o escrever na busca chamar iniciarFiltrarLivros
// 2 - Construir função apiLivros_BuscarTodosOsLivros
// 3 - Construir função tela_AdicionarLivrosNaTabela
// 4 - Construir função utilitariosVetores_filtrarVetor
// 5 - Testar unitariamente a função utilitariosVetores_filtrarVetor
// 6 - Construir função iniciarFiltrarLivros para escrita no filtro do input buscar
// 7 - Separar funções em seus módulos (remova o que vem antes do underline _ e coloque em um arquivo com o mesmo nome)

let livros = [] // Usar como memória de livros que foram buscados do servidor (API)
// Adicionar callback function para keyup de botão de busca
document.getElementById("busca")
    .addEventListener("keyup", iniciarFiltrarLivros)

iniciar() // Contexto global executando função iniciar ao entrar na tela

async function iniciar() {
    console.log("-- FUNÇÃO INICIAR --")

    livros = await apiLivros_BuscarTodosOsLivros()
    tela_AdicionarLivrosNaTabela(livros)
}

async function apiLivros_BuscarTodosOsLivros() {
    const resposta = await fetch("https://api-aula.up.railway.app/livros")
    const dados = await resposta.json()

    return dados
}

function tela_AdicionarLivrosNaTabela(livros) {
    const tbody = document.getElementById("livros")
    
    const linhas = construirLinhasNaTabela(livros)

    tbody.innerHTML = linhas
}

function construirLinhasNaTabela(livros) {
    let linhas = ""

    livros.forEach((livro) => {
        linhas += `
            <tr>
                <td>${livro.title}</td>
                <td>${livro.description}</td>
            </tr>
        `
    })

    return linhas
}

function iniciarFiltrarLivros() {
    console.log(" -- FILTRANDO LIVROS -- ")

    const valorDeBusca = document.getElementById("busca").value
    const livrosFiltrados = utilitariosVetores_filtrarVetor(livros, valorDeBusca)

    tela_AdicionarLivrosNaTabela(livrosFiltrados)
}

/* Testar função abaixo exemplo (
    const listaOriginal = [
        { nome: "João", idade: 20 },
        { nome: "Maria", idade: 30 },
        { nome: "José", idade: 25 },
        { nome: "João", idade: 12 },
    ]
    const valorDeBusca = "João"
    const propriedade = "nome"
    const resultado = filtrarVetor(listaOriginal, valorDeBusca, propriedade)
    console.log(resultado)
    // Deve retornar [{ nome: "João", idade: 20 }, { nome: "João", idade: 12 }]
) */
function utilitariosVetores_filtrarVetor(listaOriginal, valorDeBusca) {
    const livrosFiltrados = listaOriginal.filter(
        (livro) => livro.title.includes(valorDeBusca)
    )

    return livrosFiltrados
}



