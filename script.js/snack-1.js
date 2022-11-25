// Snack 1n#####################################

const lista = [ ];

for ( i = 0; i < 6; i++){
    
    const numero = parseInt(prompt('Inserisci numero'));

    if (numero % 2 == 1){
        console.log("pari")
        // inserisco nell'array
        lista.push(numero);
    } 
}

console.log(lista)

