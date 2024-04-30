import "./scss/cliente.scss"

console.log("Iniciando contexto global: Página de cliente...")

// Exercício 2
// 0 - Ler todo o código e entender o que falta
// 1 - Adicionar pontos faltantes, como o escrever na busca chamar iniciarFiltrarLivros
// 2 - Construir função apiLivros_BuscarTodosOsLivros
// 3 - Construir função tela_AdicionarLivrosNaTabela
// 4 - Construir função utilitariosVetores_filtrarVetor
// 5 - Testar unitaria mente função utilitariosVetores_filtrarVetor
// 6 - Construir função iniciarFiltrarLivros para click do botão buscar
// 7 - Separar funções em seus módulos (remova o que vem antes do underline _ e coloque em um arquivo com o mesmo nome)

let livros = [] // Usar como memória de livros que foram buscados do servidor (API)
// Adicionar callback function para keyup de botão de busca

iniciar() // Contexto global executando função iniciar ao entrar na tela

async function iniciar() {
    livros = await apiLivros_BuscarTodosOsLivros()
    tela_AdicionarLivrosNaTabela(livros)
}

async function apiLivros_BuscarTodosOsLivros() {
    // return livros
}

function tela_AdicionarLivrosNaTabela(livros) {
    // Construir tbody com os livros
}

function iniciarFiltrarLivros() {
    // Buscar valor da tela
    // filtrarLivros(livros, valorDeBusca)
    // adicionarLivrosNaTabela(livrosFiltrados)
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
function utilitariosVetores_filtrarVetor(listaOriginal, valorDeBusca, propriedade) {
}



