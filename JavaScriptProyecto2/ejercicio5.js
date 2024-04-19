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


function imprimirTablasMultiplicar() {
    for (let i = 1; i <= 10; i++) {
      console.log(`Tabla de multiplicar del ${i}:`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
      console.log(""); // Imprimir una línea en blanco entre cada tabla
    }
  }
  
  imprimirTablasMultiplicar();
  