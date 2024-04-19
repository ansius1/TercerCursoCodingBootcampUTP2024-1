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

//pide al usuario 15 numeros y de estos saca el menor, el mayor, los numeros mayores a 150 y el promedio de ls numeros dijitados
const prompt = require('prompt-sync')();

let num150 = 0;
let lista = [];
let suma = 0;

for (let i = 1; i <= 15; i++) {
    let num = parseFloat(prompt(`Indique el número ${i}: `));
    lista.push(num);
    suma += num;

    if (num >= 150) {
        num150++;
    }
}

let menor = Math.min(...lista);
let mayor = Math.max(...lista);
let promedio = suma / lista.length;

console.log('El número menor es: ' + menor);
console.log('El número mayor es: ' + mayor);
console.log('Los números mayores o iguales a 150 son: ' + num150);
console.log('El promedio de los números ingresados es: ' + promedio);
