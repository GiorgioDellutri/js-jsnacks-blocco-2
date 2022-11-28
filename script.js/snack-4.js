/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela ', 'Giuseppina ', 'Taylor ','Donna ', 'Marsha ', 'Fabio ', 'Roberto '];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];
const n = parseInt(prompt('Quanti nomi vuoi inserire?'));

let invitato = [];

for( let i = 0; i < n; i++){

    invitato[i] = names[i] + lastnames[i];
}

console.log(invitato);