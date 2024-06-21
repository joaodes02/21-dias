// Operadores && and ||

let nomeUsuario = prompt("Qual seu nome?")
let idadeUsuario = Number(prompt("Qual sua idade ?"))


if(idadeUsuario === 21 && nomeUsuario ==="João Victor"){
    console.log("Você se chama João Victor E tem 21 anos de idade.")
}else if(idadeUsuario === 21 || nomeUsuario === "João Victor"){
    console.log("Você se chama João Victor OU tem 21 anos de idade.")
}else{
    console.log("Você não se chama João Victor e não tem 21 anos de idade")
}