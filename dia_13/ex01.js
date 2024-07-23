class Computador{
    tipo 
    processador 
    video 
    armazenamento 
    MemoriaRam
    SSD
    constructor(tipo, processador, video, armazenamento, MemoriaRam, SSD){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.MemoriaRam = MemoriaRam
        this.SSD = SSD
    }
    inf(){
        console.log(`tipo = ${this.tipo}`)
        console.log(`processador = ${this.processador}`)
        console.log(`video = ${this.video}`)
        console.log(`armazenamento = ${this.armazenamento}`)
        console.log(`MemoriaRam = ${this.MemoriaRam}`)
        console.log(`SSD = ${this.SSD}`)
    }
}

let pc = new Computador('Desktop', 'i3-9300F','Dedicado', '1TB', '16GB', true)
pc.inf();