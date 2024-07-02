// Desafios dia 011: 

let arrayNomes = [];
let arrayNotas = [];
let opcao = true;
contador = 0 

do {

    let nomes = prompt("Insira o nome do aluno: ")
    let notas = Number(prompt(" Insira a nota do aluno "))
    arrayNomes.push(nomes)
    arrayNotas.push(notas)

    opcao = prompt("Você deseja Continuar? s/n")

    switch (opcao) {
        case "s":
            continue;
        case "n":
            console.log("Estamos Encerrando. ")
            opcao = false
            break;
        default:
            console.log("Opção Invalida. Estamo encerrando.");
            break
    }
    
} while (opcao);

console.log("Nota dos alunos: ")
for(let i =0; i < arrayNomes.length; i++){
    console.log(`${arrayNomes[i]} -> ${arrayNotas[i]}`)
}

let somaNotas = 0 
for(let i =0; i < arrayNotas.length; i++){
    somaNotas += arrayNotas[i]
}


let media = somaNotas / arrayNomes.length

console.log(`Soma das notas: ${somaNotas}`)
console.log(`Média Geral foi: ${media}`)