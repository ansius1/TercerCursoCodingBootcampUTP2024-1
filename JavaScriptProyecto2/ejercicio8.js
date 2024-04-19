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
function GenerarPrejas(){
    let contador = 0;//Variable para llevar el conteo de las parejas generadas
    
    for (let i = 1; i < 11; i++) {// Bucle para iterar sobre los valores del 1 al 10

        let SegundoValor = Math.min(Math.floor((i - 1)/2) + 1,5);// Variable para calcular el segundo valor en cada pareja
        console.log(contador , SegundoValor);// Muestra el contador y el segundo valor
        contador++;// Incrementa el contador para la próxima pareja
    }
}
GenerarPrejas()// Llama a la función para generar las parejas