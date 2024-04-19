
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
// declaramos prompt como costante let linea = ["","","","","","","","",""];

function valores(){
    let i = -1;

    const darValores = setInterval(() => {
        linea[i + 1] = "A";
        linea[7 - i] = "A";

        let inv = linea.join(" ");
        console.clear();
        console.log(inv);
        linea[i + 1] = "";
        linea[7 - i] = "";
        i++;
        if (i > 4) {
            clearInterval(darValores);

        }else if (i == 4){
            console.clear();
            console.log("    AA    ");
            clearInterval(darValores);
        }
    }, 1000);
}

valores();