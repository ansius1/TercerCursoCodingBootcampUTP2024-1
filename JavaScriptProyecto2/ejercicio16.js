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
                linea += " Z ";
//aqui se copiaria el codigo anterior , pero cambiandole el numero de columnas, y eliminando algunas filas
            } else if (i === 1 && (j === 8 || j === 9 || j === 10)) {

                linea += " Z ";
            } else if (i === 2 && (j === 7 || j === 9 || j === 10 || j === 8 || j === 11)) {
                
                linea += " Z ";

            } else if (i === 3 && (j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11 || j === 12)) {

                linea += " Z ";
            } else if (i === 4 && ( j === 7 || j === 8 || j === 9 || j === 10 || j === 11)) {
            
                linea += " Z ";

            }    else if (i === 5 && ( j === 8 || j === 9 || j === 10 )) {

                linea += " Z ";

            
            }    else if (i === 6 && ( j === 9 )) {

                linea += " Z ";

                
            } else {
                linea += "   ";
            }
        }
        console.log(linea);
    }
}

// Definir el tamaño de la cuadrícula
const filas = 10;
const columnas = 20;

// Imprimir la cuadrícula
imprimirCuadricula(filas, columnas);