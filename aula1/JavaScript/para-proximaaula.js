function dinheiro(Quantia,Gastou){
return Quantia-Gastou
};




function tempo(hora1,hora2){
    return hora1-hora2;
}




function NomeDoUsuário(nome){
    console.log('Chefe : Ei, ' + nome, 'onde você está? você não tem muito tempo para chegar aqui, se não chegar a tempo, você será EXPULSO!')
    console.log(nome + ': Desculpe chefe, dormi demais. Já estou a caminho.')
    console.log(nome + ': Ok, tenho  ' + tempo(9,5) + '  horas restantes para chegar e preciso botar gasolina na na minha moto ')
}




NomeDoUsuário("Paulo");



console.log("Atendente : Bom dia! aqui estão as sequintes opções de Gasolina")


let gasos = ["Diesel","Gasolina Comum", "Alcóol"];
console.log(gasos);


function gasolinas(gaso){

    if(gaso === "Diesel"){
        return(" Atendente : Senhor, a gasolina Diesel custa 50 reais, você quer mesmo comprar ela?" + 
        "Você : Sim! irei comprar a gasolina! aqui está o dinheiro" + 
        "  - você gastou 50 reais" + 
        "  Atendente : Obrigado Senhor! Te sobrou " + dinheiro(3000,50) + "  reais! Tenha uma boa viagem!");
       
    }
}

console.log("Você : Eu gostaria de comprar da Diesel por favor !" + gasolinas("Diesel"));  

console.log("Esperando o semaforo....")


function semaforo(cor){

    if(cor === "Verde"){
        return("Boa! O semaforo está verde, isso vai economizar demaaaaais o meu tempo");
        return("teste");
    }
    else if(cor === "Amarelo"){
        return("Já vai dar sinal vermelho... é melhor eu esperar para não tomar multa.");
    }
    else if(cor === "Vermelho"){
        return("Droga! isso vai demorar demaais")
    }
}

console.log(semaforo("Verde"));  

console.log("V o c ê C h e g o u a t e m p o !!!")