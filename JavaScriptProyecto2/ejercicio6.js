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

const readline = require('readline');

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFactorial(numero) {
  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}

interfaz.question("Ingrese un número para calcular su factorial: ", function(numero) {
  numero = parseInt(numero);

  if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingrese un número entero positivo.");
  } else {
    const factorial = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es: ${factorial}`);
  }

  interfaz.close();
});
