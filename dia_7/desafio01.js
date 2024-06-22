// Desenvolva um algoritmo que receba a nota e o sexo do aluno, 
// usando a estrutura WHILE, 
// e pergunte ao usuario se ele deseja cadastrar outra nota. 
// No final, exiba no console:

//  - A média geral dos alunos
//  - Quantos homens enviaram as notas
//  - Quantas mulheres tiveram nota acima de 7
//  - Qual a maior nota entre os homens


let mediaGeral = 0 
let qtdHomens = 0 
let mulheresAcimaDe7 = 0 
let maiorNotaHomens = 0 
let contador = 1 

while(contador <= 10 ){
    let nota = Number(prompt(`Digita a nota do ${contador}º aluno: `))
    let sexo = prompt("Qual o sexo do aluno? m/f")
    if(sexo == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        qtdHomens++
    }
    if(sexo == "f" && nota > 7){
        mulheresAcimaDe7++
    }
    mediaGeral += nota
    contador ++
}

mediaGeral = mediaGeral / 10 

console.log(`A media geral dos alunos é: ${mediaGeral}`)
console.log(`A quantidade de homens que enviram as notas: ${qtdHomens}`)
console.log(`A quantidade de mulheres que tiveram notas acima de 7: ${mulheresAcimaDe7}`)
console.log(`A maior nota entre os homens foi: ${maiorNotaHomens}`)