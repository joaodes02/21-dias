// Criando Arrays 

nomes = []
senhas = []
contador = 0 

let continuar = true

while(continuar){

    let op = (prompt("Escolha uma opção: 1 - Cadastrar / 2 - Login / 3 - Excluir / 4 - Encerrar"))

    switch(op){
        case "1":
            nomes[contador] = prompt("Digite um nome: ")
            senhas[contador] = prompt("Digite uma senha: ")
            contador++

            break; 
        case "2":
            let nome = prompt("Qual nome? ")
            let senha = prompt("Qual senha? ")
               
            let loginValido = false

            for(let i = 0; i < nomes.length; i++){
            if(nome === nomes[i] && senha === senhas[i]){
                    loginValido = true
            }

            if(loginValido){
                alert("Login efetuado com sucesso! ")
            }else{
                alert("Login ou senha incorretos!")
            }
            }
            break;
        case "3":
            let nomeExc = prompt("Qual nome deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0

            for(let i = 0; i < contador; i++){
                if(nomeExc === nomes[i]){
                    alert("Cadastro excluido com sucesso! ")
                }else{
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contaodrAux] = senhas[i]
                    contadorAux++
                }
            }

            nomesAux = nomes
            senhasAux = senhas
            contador--
            break
        case "4":
            alert("Programa finalizado com sucesso! ")
            continuar = false
            break;
        default:
            console.log("Opção invalida! ")
            break;
    }
}