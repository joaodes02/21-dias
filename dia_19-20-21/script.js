// Projeto Final 
// Funções desenvolvidas para o trabalho em conjunto com a DoDev 

// Clase

class ToDo {
    Texto
    Prioridade
    Feito = false
    constructor(texto, prioridade) {
        this.Texto = texto
        this.Prioridade = prioridade
    }
}

// Array
arrayTodos = []

//funções projeto

function CriarToDo(texto, prioridade, array) {

    let ObjetoTodo = new ToDo(texto, prioridade)
    if (!array.some(x => x.Texto == texto)) {
        array.push(ObjetoTodo)
        return ObjetoTodo
    }
}

function AtualizarToDo(textoAntigo, textoNovo, array) {
    let atualizado = false
    array.forEach(todo => {
        if (todo.Texto == textoAntigo) {
            todo.Texto = textoNovo
            atualizado = true
        }
    })
    return atualizado
}

function ConcluirToDo(array, texto) {
    let concluido = false
    array.forEach(todo => {
        if (todo.Texto == texto) {
            if (todo.Feito) {
                todo.Feito = false
            } else {
                todo.Feito = true
            }
            concluido = true
        }
        return concluido
    })
}

function ExcluirToDo(array, texto) {
    let index
    let removido = false
    array.forEach(todo => {
        if (todo.Texto == texto) {
            index = array.indexOf(todo)
            removido = true
        }
    })
    array.splice(index, 1)
    return removido
}

function PesquisarToDo(array, texto) {
    let pesquisa = false
    array.forEach(todo => {
        if (todo.Texto.includes(texto)) {
            pesquisa = true
        }
    })
    return pesquisa
}

function OrdenarCrescente(array) {
    array.sort((a, b) => a.Prioridade - b.Prioridade)
    return array
}
function OrdenarDecrescente(array) {
    array.sort((a, b) => b.Prioridade - a.Prioridade)
    return array
}
