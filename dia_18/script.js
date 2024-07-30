class Livro {
    Titulo
    Autor 
    Editora 
    AnoPublicacao
    Disponibilidade
    constructor(titulo, autor, editora, anoPublicacao){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoPublicacao = anoPublicacao
        this.Disponibilidade = true
    }
}

let livros =  []
let livroObjeto1 = new Livro('Homem Rico', 'Joao Victor', 'Censgra', 2002, true);
let livroObjeto2 = new Livro('Pai Rico, Pai Pobre', 'Joelma Cunha', 'Censgra', 2010, true);
livros.push(livroObjeto1, livroObjeto2)

console.log(livros)

class Biblioteca {
    Nome 
    Endereco 
    Telefone 
    AcervoDeLivros = []
    constructor(nome, endereco, telefone, acervo){
        this.Nome = nome 
        this.Endereco = endereco
        this.Telefone = telefone 
        this.AcervoDeLivros = acervo

    }
    BuscarLivro(titulo){
        this.AcervoDeLivros.forEach(livro => {
            if(livro.Titulo == titulo){
                console.log(livro)
            }
        })   
    }
    emprestarLivro(titulo){
        let emprestar = false
        this.AcervoDeLivros.forEach( livro => {
            if(livro.Titulo == titulo){
                if(livro.Disponibilidade == true){
                    livro.Disponibilidade == false
                    emprestar = true
                    console.log(`${livro.Titulo} foi emprestado`)
                }
            }
        })
        if(emprestar){
            return true
        }else {
            return false
        }
    }
    devolverLivro(titulo){
        livros.forEach(livro => {
            if(livro.Titulo == titulo){
                livro.Disponibilidade = true
                console.log("Livro Devolvido")
            }
        })
    }
}

let biblioteca = new Biblioteca('BibA', 'Rua D, 121', '24xxxxx', livros)

biblioteca.BuscarLivro('Homem Rico')
biblioteca.emprestarLivro('Pai Rico, Pai Pobre')
biblioteca.devolverLivro('Pai Rico, Pai Pobre')
