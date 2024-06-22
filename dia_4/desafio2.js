// 1.1 - Crie um sistema que peça para o seu usuário as seguintes informações: 
// nome, idade, se possuí carta de motorista e se tem algum carro.

// 1.2 - Se o usuário não for maior de idade ou não tiver carta exiba no console: 
// "Giovanni, você não pode dirigir".

// 1.3 - Se o usuário for maior de idade, tiver carta mas não tiver carro exiba no console: 
// "Giovanni, você pode dirigir mas não tem um carro".

// 1.4 - Se o usuário for maior de idade, tiver carta e carro exiba no console: 
// "Giovanni, você será o motorista!"

// Criando variaveis
let nomeUsuario 
let idadeUsuario
let carroUsuario = false
let cartaMotUsuario = false

// Pedindo Informações para o User
nomeUsuario = prompt("Qual seu nome?")
idadeUsuario = parseInt(prompt("Qual sua idade?"))
let opcaoCarta = prompt("Você tem carteira de motorista? (s/n)")
if(opcaoCarta == "s"){
        cartaMotUsuario = true
}
let opcaoCarro = prompt("Você possui algum carro? (s/n)")
if(opcaoCarro == "s"){
    carroUsuario = true
}

// Exibindo mensagem no console + condições
if(idadeUsuario < 18 || !cartaMotUsuario){
    console.log(`${nomeUsuario}, você não pode dirigir.`)
}else if(idadeUsuario >=18 && cartaMotUsuario && !carroUsuario){
    console.log(`${nomeUsuario}, você pode dirigir mas não tem um carro.`)
}else{
    console.log(`${nomeUsuario}, você será um motorista!`)
    
}