// let nome1 = "João";
// console.log(nome1)
// nome1 = "Aleixo"
// console.log(nome1)


// console.log("=======CONSTANTE=======")

// const nome2 = "Maria";
// console.log(nome2)
// nome2 = "Carlos Eduardo"
// console.log(nome2)


// Exercício IMC: 


let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let altura = Number(prompt("Digite sua altura: "));
let peso = Number(prompt("Digite seu peso: "));

let Nascimento = 2023 - idade;
let imc = peso / (altura * altura);
console.log(`Olá, ${nome}, você tem ${idade} anos, pesa ${peso} kg, tem ${altura}m de altura e seu IMC é de ${imc.toFixed(2)} kg/m²`);

