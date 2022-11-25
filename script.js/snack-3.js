const listaNumeri = [1,2,3,4,5,6,7,8,9,10,3,6,78,3,4,5];

somma = 0;
let media;
for (i = 0; i < 10; i++){
    somma += listaNumeri[i];
    media = somma / 10;
}

console.log("la somma dei primi 10 numeri è" + somma);
console.log ("la media è " + media);