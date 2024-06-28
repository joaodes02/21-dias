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


let array= []
let arrayInvertido = []

for(let i =0; i < 5; i++ ){
    let numeros = prompt(`Insire o elemento ${i + 1}: `)
    array[i] = [numeros]
}

console.log(`Array Original: ${array}`)

let contador = 4

for(let i = 0; i<5; i++){
    arrayInvertido[i] = array[contador]
    contador--
}

console.log(`Array Invertido: ${arrayInvertido}`)