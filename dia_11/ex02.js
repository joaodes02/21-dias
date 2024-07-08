let arrayModelos = [];
let arrayAnos = [];
let arrayValores = [];
let continuar = true;



do {
    let modelos = prompt("Insira o modelo do carro: ")
    let ano = Number(prompt(" Insira o ano do carro:  "))
    let valor = Number(prompt("Insira o valor do carro: "))
    arrayModelos.push(modelos)
    arrayAnos.push(ano)
    arrayValores.push(valor)

    let resposta = prompt("Você deseja Continuar? s/n")

    switch (resposta) {
        case "s":
            continue;
        case "n":
            console.log("Estamos Encerrando. ")
            continuar = false
            break;
        default:
            console.log("Opção Invalida. Estamo encerrando.");
            break
    }
    
} while (continuar);


//exibindo modelos, valores e anos
console.log("Modelo, ano e valores: ")
for(let i=0; i < arrayModelos.length; i++){
    console.log(`Modelo:${arrayModelos[i]} - Ano:${arrayAnos[i]} - Valor:${arrayValores[i]}`)
}


// ordenando por preço 
console.log("------------------------------------------------")


for(let i = 0; i < arrayValores.length - 1; i++){
    for(let j=0; j < arrayValores.length - i - 1; j++){
        if(arrayValores[j] > arrayValores[j + 1]){
            
            let modeloMaiorValor = arrayModelos[j]
            arrayModelos[j] = arrayModelos[j+1]
            arrayModelos[j+1] = modeloMaiorValor

            let anoMaiorValor = arrayAnos[j]
            arrayAnos[j] = arrayAnos[j+1]
            arrayAnos[j+1] = anoMaiorValor

            let maiorValor = arrayValores[j]
            arrayValores[j] = arrayValores[j+1]
            arrayValores[j+1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço: ")
for(let i = 0; i < arrayModelos.length; i++){
    console.log(`Modelos: ${arrayModelos[i]} - Anos: ${arrayAnos[i]} - Valores: ${arrayValores[i]} `)

}