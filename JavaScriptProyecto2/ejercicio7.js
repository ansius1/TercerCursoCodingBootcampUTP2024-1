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

function CalcularFactoriales() {
    let N = parseInt(prompt("Ingresa un número entero positivo para calcular el factorial: "));

    // Validación: Asegura que el usuario ingrese un número entero positivo
    while (isNaN(N) || N < 0) {
        console.log("Debe ingresar un número entero positivo. Inténtalo de nuevo.");
        N = parseInt(prompt("Ingresa un número entero positivo para calcular el factorial: "));
    }

    let SumaFactoriales = 0;
    let factorial = 1;

    // Calcula la suma de los factoriales desde 0 hasta N
    for (let i = 0; i <= N; i++) {
        if (i > 0) {
            factorial *= i; // Calcula el factorial de i
        }
        SumaFactoriales += factorial; // Agrega el factorial al resultado acumulado
    }

    console.log("La suma de los factoriales desde 0 hasta " + N + " es: " + SumaFactoriales);
}

// Llama a la función CalcularFactoriales
CalcularFactoriales();