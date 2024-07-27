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
            if(idHotel === hoteis[i].Id){
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
    }while (diaSaida < diaEntrada)
    let reserva = new Reserva(idReserva, idHotel, responsavel, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}


//Funções de Buscas:

function ProcurarReservaPeloHotel(idhotel){
    hoteis.forEach(reserva => {
        if(idHotel == reserva.IdHotel){
            let i = idHotel - 1 
            console.log(`hotel: ${reserva.hoteis[i].Nome}`)
            console.log(`Responsavel: ${reserva.Responsavel}`)
            console.log(`Dia de entrada: ${reserva.DiaEntrada}`)
            console.log(`Dia de Saida ${reserva.DiaSaida}`)
        }
    })

}

function ProcurarHotelPelaReserva(idReserva){
    let idHotel = reservas[idReserva - 1].IdHotel
    console.log(`Hotel: ${hoteis[idHotel - 1].Nome}`)
    console.log(`Endereço: ${hoteis[idHotel - 1].Endereco}`)
    console.log(`Dia de Entrada: ${reservas[idHotel - 1].DiaEntrada}`)
    console.log(`Dia de Saida: ${reservas[idHotel - 1].DiaSaida}`)
}

function ProcurarReservaPeloNome(nome){
    for(let i = 0; i < reservas.length;i++){
        if(nome == reservas[i].Responsavel){
            console.log(`Id da Reserva: ${reservas[i].Id}`)
            console.log(`Hotel: ${hoteis[(reservas[i].idHotel)- 1].Nome }`)
        }
    }
}


function ProcurarHotelPelaCategoria(categoria){
    let hoteisProcurados = []
    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}


// Função para atualizar o telefone do hotel: 

function AtualizarTelefone(idHotel, telefone){
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Telefone atualizado com sucesso! ")
}

// Funcionamento: 

let continuar = true

do{
    let opcao = prompt("Escolha uma opção: \n1- Cadastrar Hotel \n2-Cadastrar Reserva \n3- Procurar Reserva pelo Hotel" + 
        "\n4- Procurar Hotel pela Reserva \n 5- Procurar Reserva pelo Nome \n 6- Procurar hoteis por categoria \n7- Atualizar Telefone de um Hotel" + 
        "\n8- encerrar programa"
    )
    switch(opcao){
        case "1":
            CadastroHotel();
            break
        case "2":
            CadastrarReserva();
            break
        case "3":
            ProcurarReservaPeloHotel(prompt("Digite o ID do Hotel: "));
            break
        case "4":
            ProcurarHotelPelaReserva(prompt("Digite o ID da Reserva: "));
            break
        case "5":
            ProcurarReservaPeloNome(prompt("Digite o Nome do responsavel pela reserva: "))
            break
        case "6":
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar: ")))
            console.log(hoteisProcurados)
            break
        case "7":
            let idHotel = parseInt(prompt("Digite o ID do hotel que deseja atualizar: "))
            let telefone = prompt("Digite o telefone que deseja atualizar: ")
            AtualizarTelefone(idHotel, telefone);
            break
        case "8":
            console.log("Programa encerrado!")
            continuar = false
            break
        default:
            console.log("Opção Invalida")
            break
         
    }

}while(continuar)