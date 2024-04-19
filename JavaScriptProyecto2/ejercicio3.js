
//fecha y hora:15/04/2024 -5:56 pm 
/*
autores. ing andres mauricio robayo vargas , ing gabriel alejandro betancur rios, 
ing angie vanessa guazaquillo ospina, ing oscar julian salazar pinzon,
ing daniela panasso hernandez, ing luis panesso hernandez,
ing jordan valencia patiño. ing santiago ordoñez,ing angel henao, ing robert carvajal,
ing michael castro, ing juan esteban ortiz,




*/
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion
// declaramos prompt como costante 
const prompt = require('prompt-sync')();
let numero = parseFloat(prompt('Ingrese su número: '));

function numeroAlreves(numero) {
  let reverso = 0;
  while(numero > 0) {
    reverso = 10 * reverso + numero % 10;
    numero = Math.floor(numero / 10);
  }
  return reverso;
}

let reverso = numeroAlreves(numero);
console.log(`El número ${numero} en inverso es ${reverso}`); 