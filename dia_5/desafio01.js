// 1.1 - Crie um algoritmo que peça 2 números ao usuário

// 1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números

// 1.3 - Exiba no console a operação feita e o resultado da conta

let valor1
let valor2
let opcao

valor1 = parseFloat(prompt("Digite o primeiro número: "))
valor2 = parseFloat(prompt("Digite o segundo número: "))
opcao  = prompt("Qual operação você deseja realizar? (+, -, /, *, %)")

switch(opcao){
    case "+":
        console.log(`${valor1} + ${valor2} =`, valor1 + valor2)
        break;
    case "-":
        console.log(`${valor1} - ${valor2} =`, valor1 - valor2)
        break;
    case "/":
            console.log(`${valor1} / ${valor2} =`, valor1 / valor2)
            break;
    case "*":
        console.log(`${valor1} * ${valor2} =`, valor1 * valor2)
        break;
    case "%":
         console.log(`${valor1} % ${valor2} =`, valor1 % valor2)
         break;
    default:
        console.log("Opção invalida")
        break;
}
