// 1.1 - Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.

// 1.2 - Se estiver sem fome ou sem dinheiro exiba no console: 
// "Hoje a janta será em casa"

// 1.3 - Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: 
// "Peça um delivery!"

// 1.4 - Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: 
// "Hoje o jantar será no seu restaurante preferido!"


let fomeUsuario = prompt("Você está com fome? (s/n)")
let dinUsuario = prompt("Você está com dinheiro? (s/n)")
let restauranteUsuario = prompt("O restaurante está aberto? (s/n)")

if (fomeUsuario === "n" || dinUsuario === "n"){
    console.log("Hoje o jantar será em casa! ")
}else if(dinUsuario ==="s" && restauranteUsuario === "s"){
    console.log ("Hoje o jantar será no seu restaurante preferido!!!")
}else{
    console.log("Peça um delevery!!")
}
