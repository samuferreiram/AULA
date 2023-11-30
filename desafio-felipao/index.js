let heroi = ["Calabreso", 11000]

function dadosHeroi(){
    const xpHeroi = heroi[1]

    if(xpHeroi<1000){
        return "Ferro"
    }
    else if((xpHeroi>1000 && xpHeroi<=2000)){
        return "Bronze"
    }
    else if((xpHeroi>2000 && xpHeroi<=5000)){
        return "Prata"
    }
    else if((xpHeroi>5000 && xpHeroi<=7000)){
        return "Ouro"
    }
    else if((xpHeroi>7000 && xpHeroi<=8000)){
        return "Platina"
    }
    else if((xpHeroi>8000 && xpHeroi<=9000)){
        return "Ascendente"
    }
    else if((xpHeroi>9000 && xpHeroi<=10000)){
        return "Imortal"
    }
    else{
        return "Radiante"
    }
}

console.log("O Herói " + heroi[0] + " está no nível " + dadosHeroi())