let arrayNomes = [];
let arraySenhas = [];


function perguntarUser(){
    let opcao = prompt("1 - Cadastrar / 2 - Login / 3 - Excluir / 4 - Encerrar ")
    return opcao;
}


function cadastrar(){
    let nome = prompt("Digite o Nome: ")
    let senha = prompt("Digite a Senha: ")
    arrayNomes.push(nome)
    arraySenhas.push(senha)
    console.log(arrayNomes)
    console.log(arraySenhas)
}   


function login(nome, senha){
    let indice = arrayNomes.indexOf(nome);
    if(indice !== -1 && arraySenhas[indice] == senha){
        return true  
    }else{
        return false
    }
}

function excluir(nome){
    let indice = arrayNomes.indexOf(nome);
    if(indice !== -1){
        arrayNomes.splice(indice, 1);
        arraySenhas.splice(indice, 1);
        console.log("Cadastro excluido com sucesso!")
    }else{
        console.log("Usuario nao encontrado")
    }
}

// fluxo de funcionamento do programa: 

continuar = true 

while(continuar){
    
    let opcao = perguntarUser();
    let nome 
    let senha

    switch(opcao){
        case "1":
            cadastrar();
            break;
        case "2":
            nome = prompt("Informe o nome de usuario: ")
            senha = prompt("Informe a senhna: ")
            let verificandoLogin = login(nome,senha);
            if(verificandoLogin == true){
                console.log("Login efetuado com sucesso!")
            }else{
                console.log("Usuario ou senha incorretos!")
            }
            break;
        case "3":
            nome = prompt("Digite o noem que deseja exluir; ")
            excluir(nome);
            break;
        case "4":
            continuar = false
            console.log("Programa encerrado.")
            break;
        default:
            console.log("Opção invalida. Tente novamente")
            break;
    }
}
