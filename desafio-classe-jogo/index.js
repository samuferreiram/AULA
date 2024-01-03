class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    poderHeroi(){
        const poder = this.tipo
        
        if(poder == "mago"){
            console.log("magia") 
        }

        else if(poder == "guerreiro"){
            console.log("espada")
        }

        else if(poder == "monge"){
            console.log("artes marciais")
        }  

        else if(poder == "ninja"){
            console.log("shuriken")
        }

    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${poderHeroi()}.`)
    }
}

let acao = new heroi ("Judivan", "3254", "mago")


acao.atacar()