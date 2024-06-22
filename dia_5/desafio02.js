// 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: 
// abastecer com gasolina, com álcool ou calibrar os pneus.

// 1.2 - Se o usuário escolher abastecer com gasolina, 
// você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida 
// (litro de gasolina = R$5) 

// 1.3 - Se o usuário escolher abastecer com álcool, 
// você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida 
// (litro de álcool = R$3)

// 1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: 
// "pneus calibrados com sucesso".

let litrosAlcool
let valorAlcool
let litrosGasolina
let valorGasolina
let opUsuario = prompt("Escolha uma opção: 1- Gasolina, 2- Álcool, 3- Calibrar Pneus")

switch(opUsuario){
    case "1":
        valorGasolina = parseFloat(prompt("Qual valor desejado?"))
        litrosGasolina = valorGasolina/5
        console.log(`Foi abastecido: ${litrosGasolina.toFixed(2)} litros de gasolina.`)
        break;
    case "2":
        valorAlcool = parseFloat(prompt("Qual valor desejado?"))
        litrosAlcool = valorAlcool/3
        console.log(`Foi abastecido: ${litrosAlcool.toFixed(2)} litros de álcool.`)
        break;
    case "3":
        console.log("Pneus calibrados com sucesso! ")
        break;
    default:
        console.log("Infelizmente, não temos essa opção!")

}

