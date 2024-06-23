// Solicite o nome e o cpf do seu cliente.
// Pergunte um valor.
// Ofereça a opção de saque ou depósito.
// Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
// Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
// Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
// Exiba o saldo total.
// Exiba o maior valor inserido(independente de ser depósito ou saque).
// Exiba a média dos valores inseridos(independente de ser depósito ou saque).


let saldo = 2000 // definindo saldo 
let somaValoresInserido = 0 
let maiorValorInserido = 0 
let transacoes = 0 
let continuar = true

do {
    const nome  = prompt("Qual seu nome? ")
    const cpf = Number(prompt("Digite seu CPF: "))
    const valor = Number(prompt("Digite o valor desejado: "))
    const operacao = prompt("Qual operação deseja realizar? (S / D)")

    if(valor < 0 ){
        console.log("Valor inserido não compativel.Transação não realizada")
    }else if(operacao === "s" && valor > saldo){
        console.log("Saldo insuficiente. Transação não realizada ")
    }else if(operacao == "s"){
        console.log(`Olá, ${nome}, CPF:${cpf}, seu saldo é R$${saldo}`)
        saldo -= valor
        transacoes++
        somaValoresInserido += valor
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é de ${saldo}`)

    }else{
        console.log(`Olá, ${nome}, CPF:${cpf}, seu saldo atual é R$${saldo}`)
        saldo += valor
        transacoes++
        somaValoresInserido += valor
        if(valor > maiorValorInserido){
            maiorValorInserido = valor
        }
        console.log(`Transção realizada com sucesso, seu saldo atual é de ${saldo}`)
    }

    const opcao = prompt("Você deseja continuar? 1 - Continuar | 2 - sair ")
    if(opcao === "1"){
        console.log("Vamos continuar")
        continuar = true
    }else if(opcao ==="2"){
        console.log("Atividade está sendo encerrada.")
        continuar = false
    }else{
        console.log("Opção invalida. Atividade encerrada.")
        continuar = false
    }
} while (continuar);

console.log(`Seu saldo é de R$${saldo}.`)
console.log(`O mairo valor inserido foi: R$${maiorValorInserido}`)
console.log(`Média de valores inseridos foi: R${somaValoresInserido / transacoes}`)