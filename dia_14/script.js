let nome 
let salario

function perguntarUser(){
    nome = prompt("Informe o nome do Colaborador: ")
    salario = parseFloat(prompt("Informe o Salario do Colaborador: "))
    calcularAumento(nome, salario)
}

function calcularAumento(nome, salario){
    let aumento = 0 
    
    if(salario <=1500){
        aumento = 0.2
    }else if(salario >= 1501 && salario <=2000){
        aumento = 0.15
    }else if(salario >=2001 && salario <= 3000){
        aumento = 0.10
    }else{
        aumento = 0.05
    }
    let newSalario = (salario * aumento) + salario

    console.log(`Colaborador: ${nome}`)
    console.log(`Salario: ${salario}`)
    console.log(`Aumento: ${100 * aumento}%`)
    console.log(`Salario Reajustado: ${newSalario}`)
    continuarUser();
}

function continuarUser(){
    let opcao = prompt("Deseja continuar? s/n")

    if(opcao == "s"){
        perguntarUser();
    }else{
        console.log("Programa Encerrado! ")
    }
}

perguntarUser();