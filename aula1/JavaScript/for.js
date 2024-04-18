//LAÇOS DE REPETIÇÕES
//FOR - Itera sobre a lista com condições especifícas

//EXEMPLO :

for(let m = 0; m < 5 ; m++){ //declara a variável let n = 0 com o valor inicial 0
/*
explicação : equanto a variável n que inicialmente nrecebeu  o valor zero,
for menor que 5, incremente a varável n a cada execução,
o código para de executar quando a condição é cumprida.


*/

console.log("Nessa execução o númmero vale : ", m); 

};


let n1 = 5;
let n2 = 7;
let n3 = 3;
let n4 = 1;

let media = (n1 + n2 + n3 + n4 ) / 4;
let resultado;

switch(true){

    case media >= 7 :
    resultado = "APROVADO";
    break;
    case media >=5:
    resultado = "NA MEDIA";
    break;
    default:
        resultado = "Reprovado kkkkkkkkkjkkkkkkjkjkjjjkjkjki POBRE" 
}
console.log("Média" , media , ",Resultado: ", resultado);
/*



switch (media) {

case media <=2 :

return "Sua nota foi péssima";
case media <= 5:

return "Sua nota foi mediana";
case media <= 8:
    return "Sua nota foi ótima";

} */
