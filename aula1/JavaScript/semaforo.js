
function corDoSemaforo(cor){

    if(cor === "verde"){
    return("Cor VERDE, você pode seguir em frente");}
    else if(cor === "amarelo"){
        return("Cor AMAERELA, é recomendável você esperar.");}
        else if(cor === "vermelho"){
            return("Cor VERMELHA, pare imediatamente e espere o sinal verde.");
        }
        else{
            return("Cor Indefinida");
        };
    }

    console.log("Cor do semáforo",corDoSemaforo("verde"));  

