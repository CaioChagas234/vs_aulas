console.log("Mãe : Meu filho, tome 100 reais e vá a padaria, mas NÃO gaste mais do que 60 reais. Se não vai apanhar ")
console.log("Filho : Beleza mãe, vou lá.. ")

let money = 100;

/* ----------------lista de produtos---------------------- */

let morango = 25;
let laranja = 5;
let abacate = 13;
let melancia = 30;
let maracuja = 15;


/* ----------------lista de compras---------------------- */

let compras = morango + laranja + abacate + melancia + maracuja;

let limite = 60;

if(compras>money){
    console.log("você não tem dinheiro o suficiente.");
    console.log("o valor das compras foi de" , compras, "reais");
} else if(compras>=limite){
    console.log("a compra exedeu o limite e apanhou");
    console.log("o valor das compras foi de" , compras, "reais");
} else{
    console.log("Você conseguiu comprar suavemente. Você não apaia e sua mãe fica alegre!")
    console.log("o valor das compras foi de" , compras);
    console.log("te sobrou" , money-compras, "reais");

}