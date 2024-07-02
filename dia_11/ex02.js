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
