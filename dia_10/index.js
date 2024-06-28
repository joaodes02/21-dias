// lista de ex - Arrays 
//1 - Crie um algoritmo que receba um número inteiro positivo e um array. 
//Popule o array e no final exiba os índices em que número inserido aparece nesse array. 
//Para testes do exercício use até 10 elementos no array.

// const array = [];
// const indices = [];
// let contador = 0

// for(let i = 0; i < 10; i++){
//     const elemento = parseInt(prompt(`Insira o elemento ${i+1}: `));
//     array[i] = elemento;
// }

// const numeroProcurado = parseInt(prompt("Insira o numero procurado: "))

// for(let i = 0; i < 10; i++){
//     if(array[i] === numeroProcurado){
//         indices[contador] = i 
//         contador++
//     }
// }

// console.log(` numero ${numeroProcurado} foi encotrando nos indices: ${indices}`);

// 2 - Crie um algoritmo que peça 5 números ao usuário, 
// coloque eles em um array, depois exiba esse array. 
// Modifique os elementos do array de modo que a sequência de números fique ao contrário.


// let array= []
// let arrayInvertido = []

// for(let i =0; i < 5; i++ ){
//     let numeros = prompt(`Insire o elemento ${i + 1}: `)
//     array[i] = [numeros]
// }

// console.log(`Array Original: ${array}`)

// let contador = 4

// for(let i = 0; i<5; i++){
//     arrayInvertido[i] = array[contador]
//     contador--
// }

// console.log(`Array Invertido: ${arrayInvertido}`)

// 3 - Refaça o script anterior, mas agora pergunte ao usuário 
// quantos números ele deseja inserir no array. Depois, 
// o usuário vai preenchendo elemento por elemento do vetor, ao final, 
// exiba o array e o array ao contrário

// let array= []
// let arrayInvertido = []
// let quantidadeElementos = (prompt("Insira a quantidade de elementos: "))


// for(i = 0; i <quantidadeElementos ; i++ ){
//     let numeros = prompt(`Insire o elemento ${i + 1}: `)
//     array[i] = [numeros]
// }

// console.log(`Array Original: ${array}`)

// let contador = quantidadeElementos - 1 

// for(i = 0; i <quantidadeElementos ; i++ ){
//     arrayInvertido[i] = array[contador]
//     contador-- 
// }

// console.log(`Array Invertido: ${arrayInvertido}`)



// 4 - Crie um algoritmo que peça um número inteiro positivo para o usuário. Em seguida,
// popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).
// Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
// Faça com que o array tenha no máximo 10 elementos
// Para iniciar a sequência use o (número inserido - 1).

let arrayFibo = []
let numeroInt = parseInt(prompt("Digite um numero inteiro e positivo: "))
arrayFibo[0] = numeroInt - 1 
arrayFibo[1] = numeroInt 

for(let i = 2; i < 10; i++){
    arrayFibo[i] = arrayFibo[i - 1] + arrayFibo[i - 2]
}

console.log(`Fibo: ${arrayFibo}`)