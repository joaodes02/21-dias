// Criando um sistema de reservas para um hotel: 




class Hotel {
    Id
    Nome 
    Categoria 
    Endereco 
    Telefone
    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id 
        this.Nome = nome 
        this.Categoria = categoria 
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva{
    IdReserva
    IdHotel
    Responsavel 
    DiaEntrada
    DiaSaida
    constructor(idReserva, idHotel, responsavel, diaEntrada, diaSaida){
        this.Id = idReserva 
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let hoteis = [] 
let reservas = [] 
let idHotel = 1 
let idReserva = 1  




// Função para Cadastrar hotel:


function CadastroHotel (){
    let nome = prompt("Digite o nome do hotel: ")
    let categoria = prompt("Digite a categoria do hotel: ")
    let endereco = prompt("Digite o endereço do hotel: ")
    let telefone = prompt("Digite o telefone do hotel: ")
    let hotel = new Hotel( idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}


// Função para cadastrar Reserva: 
function CadastrarReserva() { 
    let idHotel 
    let existe = false 
    do{
        idHotel = parseInt(prompt("Digite o ID do hotel: "))
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                i = hoteis.length
                existe=true
            }else if(idHotel == hoteis.length -1){
                console.log("Id de Hotel não cadastrado.")
            }
        }

    }while(!existe)

    let responsavel = prompt("Digite o nome do responsavel da reserva: ")
    let diaEntrada = parseInt(prompt("Digite o dia da Entrada: "))
    do{
        diaSaida = parseInt(prompt("Digite o dia da Saida: "))
        if(diaSaida < diaEntrada){
            console.log("O dia de saida deve ser maior que o dia de entrada.")
        }
    }while (diaSaida > diaEntrada)
    let reserva = new Reserva(idReserva, idHotel, responsavel, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}













