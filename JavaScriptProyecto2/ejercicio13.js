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
function imprimirCuadricula(filas, columnas) {
    for (let i = 0; i < filas; i++) {
      let linea = "";
      for (let j = 0; j < columnas; j++) {
        if (i === 0 && j === 9) {
        } else if (i === 1 && j >= 34 && j <= 46) {
          linea += " p ";
        } else if (i === 2 && j >= 35 && j <= 45) {
          linea += " P ";
        } else if (i === 3 && j >= 36 && j <= 44) {
          linea += " P ";
        } else if (i === 4 && j >= 37 && j <= 43) {
          linea += " P ";
        } else if (i === 5 && j >= 38 && j <= 42) {
          linea += " P ";
        } else if (i === 6 && j >= 39 && j <= 41) {
          linea += " P ";
        } else if (i === 7 && j === 40) {
          linea += " P ";
        } else {
          linea += "   ";
        }
      }
      console.log(linea);
    }
  }
  
  // Definir el tamaño
  const filas = 8;
  const columnas = 46;
  
  imprimirCuadricula(filas, columnas);//llamar función