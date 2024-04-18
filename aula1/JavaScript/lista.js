
    //lista


 let frutas = ["Maça","Banana","Uva","Morango"]
console.log(frutas);

// ADICIONANDO UM ITEM NA LISTA. USAMOS PUSH.

frutas.push("Laranja");
console.log(frutas);

//ADICIONANDO UM ITEM NA LISTA AO INÍCIO, USAMOS UNSHIFT

frutas.unshift("Pera")
console.log(frutas)

//REMOVENDO UM ITEM DA LISTA AO FINAL, USAMOS POP
frutas.pop();
console.log(frutas);

//REMOVENDO UM ITEM NA LISTRA AO INÍCIO. USAMOS SHIFTY

frutas.shift();
console.log(frutas);

//DESCOBRINDO QUAL A POSIÇÃO DE UM ITEM NO ÍNDICE = indexOf;

let índice = frutas.indexOf("Banana");
console.log(índice);

//CONTANDO OS ITENS DA LISTA = length;

let numeroDeFrutas = frutas.length
console.log(numeroDeFrutas)

//VERIFICANDO SE A LISTA ESTÁ VAZIA;

if(frutas.length == 0){
    console.log("A lista está vazia");
}
else{
console.log("A lista está cheia");
}

//VERIFICAR SE UM ITEM CONTÉM UM DETERMINADO ELEMENTO
frutas.includes();

if (!frutas.includes("Maça")){
    console.log("Não tem Maça nesta lista");
}
else{
    console.log("Tem Maça nesta lista");
}

function verificarAcesso(id){

   const idsAutorizados = [100,101,102,103,104,105];
   if(idsAutorizados.includes(id)){
   console.log("Aceso Autorizado");
   }
else{
    console.log("Acesso Negado");
}
}

verificarAcesso(105)

