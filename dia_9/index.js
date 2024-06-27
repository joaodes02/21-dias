let nome = prompt("Insira sue nome: ")
let idade = Number(prompt("Insira sua idade: "))
let peso = parseFloat(prompt("Insira seu peso: "))
let altura = parseFloat(prompt("Insira sua altura: "))
let profissao = prompt("Insira sua profissão: ")


// Mostrando as informações do usuario: 

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg`)

// Verificando se o usuario é maior de idade: 

if(idade >= 18){
    console.log("Você está liberado para tomar umas geladas! ")
}else{
    console.log("Sem geladas para você! ")
}

// Infomando a idade do usuario em: MESES, SEMANAS E DIAS

let idadeMeses = idade * 12
let idadeSemanas = idade * 52
let idadeDias = idade * 365

console.log(`Sua idade em Meses é: ${idadeMeses}`)
console.log(`Sua idade em Semanas é: ${idadeSemanas}`)
console.log(`Sua idade em Dias é: ${idadeDias}`)


// Calculando IMC do usuario 

let imc = peso /(altura*altura)

if(imc < 18.5){
    console.log(`IMC = ${imc.toFixed(2)}kg/m2 -> Magreza`)
}else if (imc > 18.5 && imc <=24.9){
    console.log(`IMC = ${imc.toFixed(2)}kg/m2 -> Normal`)
}else if (imc > 24.9 && imc <=30){
    console.log(`IMC = ${imc.toFixed(2)}kg/m2 -> Sobrepeso`)
}else{
    console.log(`IMC = ${imc.toFixed(2)}kg/m2 -> Obesidade`)
}

// Calculando o ano que o usuario nasceu 

let anoAtual = 2023
let dataNascimento = anoAtual - idade
console.log(`Você nasceu em: ${dataNascimento}`)

// Exibindo valores

let continuar = true;

do{
    idade = 0 
    for(contador = dataNascimento; contador <= anoAtual; contador++) {
        console.log(`${contador} ->${idade} anos de idade`)
        idade++
    }
    
    const opcao = prompt("Voce desejar Inserir novos dados ou Finalizar o progama? I/F")
    switch(opcao){
        case "i":
            console.log("Ok vamos inserir novos dados!!")
            continuar = true
            break;
        case "f":
            console.log("Programa sendo encerrado!! ")
            continuar = false
            break;
        default:
            console.log("Opção invalida, programa sendo encerrado!! ")
    }
   
}while(continuar);