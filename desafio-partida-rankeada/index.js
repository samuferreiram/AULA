function partidasJogadas(vitoria, derrota){
    return vitoria - derrota
    }

function resultadoFinal(resultado){
    if(resultado<10){
        return "Ferro"
    }
    else if((resultado>10 && resultado<=20)){
        return "Bronze"
    }
    else if((resultado>20 && resultado<=50)){
        return "Prata"
    }
    else if((resultado>50 && resultado<=80)){
        return "Ouro"
    }
    else if((resultado>80 && resultado<=90)){
        return "Diamante"
    }
    else if((resultado>90 && resultado<=100)){
        return "Lendário"
    }
    else{
        return "Imortal"
    }
}

let resultado = partidasJogadas(100, 32)
let nivelHeroi = resultadoFinal(resultado)

console.log(`O Herói tem saldo de ${resultado}. Ele está no nível ${nivelHeroi}`)