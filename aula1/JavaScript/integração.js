
//INTEGRANDO ARRAYS, FUNÇÕES CONDIÇÕES E LOOPS

//ForEach() - Método que executa uma função pra cada item do array
// iterar : iterar significa percorrer ou verificar individualmente cada item de uma array

//EXEMPLO

let frutas = ["Maça", "Banana", "Abacate", "Limão"];

function exebirfrutas() {

frutas.forEach(function (item) {
    console.log(item);
})
}
exebirfrutas();

