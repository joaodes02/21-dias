// Primeira atividade Entregavel da DoDev - Calculadora 

// Projeto completo no repositorio => https://github.com/joaodes02/entregavel_1

// Função que foi desenvolvida para acrescentar no projeto 

// Você deve criar uma calculadora que faça as operações: soma, subtração, divisão, multiplicação e exponenciação.

function Calculadora(numero1, numero2, operador){
    let resultado 
    let num1 = parseInt(numero1)
    let num2 = parseInt(numero2)
  
    switch(operador){
      case "+":
        resultado =  num1 + num2
        break;
      case "-":
        resultado = num1 - num2
        break;
      case "/":
        resultado = num1 / num2
        break;
      case "*":
        resultado = num1*num2
        break;
      case "e":
        let contador = 1 
        resultado = num1 * num1
        while(contador < num2 - 1 ){
          resultado = resultado * num1
          contador++
        }
        break;
    }
  
    if(resultado === undefined || resultado > 1000000)
      resultado = "ERROR"
  
  
    return resultado
}  