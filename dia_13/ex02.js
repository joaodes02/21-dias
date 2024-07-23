class Carro{
    nome 
    potencia 
    velocidadeMaxima
    Aceleracao
    constructor(nome, potencia, velocidadeMaxima, Aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.Aceleracao = Aceleracao
    }
    calcular(distancia){
        let resultado = distancia / (this.velocidadeMaxima/this.Aceleracao)
        return resultado
    }
}

class Corrida{
    nome
    tipo
    Distancia   
    participantes
    vencedor 
    constructor(nome, tipo, distancia){
        this.nome = nome 
        this.tipo = tipo 
        this.Distancia = distancia
        this.participantes = []
        this.vencedor = "" 

    }
    Vencedor(){
        let menorTempo = this.participantes[0].calcular(this.Distancia)
        let vencedor = this.participantes[0]

        for(let index = 0; index < this.participantes[0]; index++){
            let tempo =  this.participantes.calcular(this.distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[index]
            }
        }
        return this.vencedor = vencedor
    }
    ExibirVencedor(){
        alert(`O vencedor da corrida, foi: ${this.vencedor.nome}`)
    }
}

let corrida = new Corrida('monza', 'Formula 1', 60000)

corrida.participantes[0] = new Carro ('fiesta', 220, 150, 9)
corrida.participantes[1] = new Carro ('monza', 150, 120, 6)
corrida.participantes[2] = new Carro ('gol', 210, 110, 7)
corrida.participantes[3] = new Carro ('vw', 300, 130, 6)

corrida.Vencedor();
corrida.ExibirVencedor();