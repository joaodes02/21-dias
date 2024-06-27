let correto = "n"

while(correto != "s"){
    let nome = prompt("Digite seu nome: ")
    let idade = Number(prompt("Digite sua idade: "))
    let salarioAtual = parseFloat(prompt("Digite seu salário atual: "))
    console.log(`Olá ${nome}, você tem ${idade}, seu sálario atual é: R$${salarioAtual}`)
    correto = prompt("As informações estão corretas? (s/n)")
}


//Previsão de salário nos proximos 10 anos -> 

let aumento = 0.015
salarioAtual = parseFloat(prompt("Digite novamente seu sálario: "))
console.log("Previsão salarial nos próximos 10 anos:")

for(let ano = 1; ano <= 10; ano++ ){
    salarioAtual += salarioAtual * aumento
    aumento *= 2 
    console.log(`${(2024 + ano)} -> R$${salarioAtual.toFixed(2)}`)
}