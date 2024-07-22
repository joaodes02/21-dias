// //Aprendendo objetos 

// class Aluno {
//     nome 
//     idade 
//     areaAtuacao
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade
//     }
//     apresentar(){
//         console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos atuo na área de ${this.areaAtuacao} `)
//     }
// }



// let alunos = []
// let continuar = true 
// let indexDeAluno = 0;

// while(continuar){
    
//     let nome = prompt("Insira o nmome do aluno: ")
//     let idade = parseInt(prompt("Insira a idade do aluno: "))
//     let aluno = new Aluno(nome, idade)

//     let areaAtuacao = prompt("Insira a área de atuação do aluno: ")
//     aluno.areaAtuacao = areaAtuacao

//     alunos[indexDeAluno] = aluno 

//     let opContinuar = prompt("Digite 1 se deseja cotinuar: ")
//     if (opContinuar != 1){
//         continuar = false 
//     }else{
//         indexDeAluno++
//     }
// }