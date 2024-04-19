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

//sumar los numero de fibonacci sin propasarse de 100
let fib1=0;
let fib2=1;
let fib;
function sumafibonacci(){
    let fibq=[fib1,fib2 ];
    for (let i=2; i <=11;i++){
fib=fib1+fib2
fib1=fib2
fib2=fib
fibq.push(fib)
    }
    return fibq;
}
const fibq=sumafibonacci()
const suma= fibq.reduce((acomulator, currenValue)=>acomulator+currenValue,0)
console.log('este programa presenta la serie de la suma de los elementos de la suma de fibonacci entre 0 y 100  los numero a sumar son:  '+ fibq+' y su suma es:  '+suma)
