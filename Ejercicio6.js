/*6. Escriba una función de JavaScript para generar un número entero aleatorio*/


function generarEntero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let numero = Math.round(Math.random() * max * (Math.random() * min));
    return numero;
    
}

alert("Vamos a generar un numero entero al azar...! \nEnter para continuar.");
alert(generarEntero(1,1000));