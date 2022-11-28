const listaNumeri = [1,2,3,46,5,22,7,13,9,10,3,6,78,3,4,5];

somma = 0;
let media;
let vmax = listaNumeri[0]

for (i = 0; i < 10; i++){
    somma += listaNumeri[i];
    if (listaNumeri[i] > vmax){
    }
}
media = somma / 10;

console.log("la somma dei primi 10 numeri è " + somma);
console.log ("la media è " + media);
console.log ("Il valore massimo dei primi 10 numeri e'" + vmax)