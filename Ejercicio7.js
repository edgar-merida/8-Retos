/*7. Escriba una función de JavaScript para obtener el máximo común divisor (mcd) de dos
enteros*/

let array1 = [];
let array2 = [];
let numero;
let MCD = 1;

function maximoComunDivisor(uno, dos) {
    for (let index = 1; index <= uno; index++) {
        numero = uno / index;
        if (numero - Math.floor(numero) == 0) {
            array1.push(index);
            //console.log(array1);        
        }
    }
    for (let index = 1; index <= dos; index++) {
        numero = dos / index;
        if (numero - Math.floor(numero) == 0) {
            array2.push(index);
            //console.log(array2);         
        }
    }
    if ((array1.length) < (array2.length)) {
        for (let index = 0; index < array1.length; index++) {
            if (!(array2.find(element => element == array1[index]) == undefined)) {
                MCD = array2.find(element => element == array1[index]);
            }
        }
    }
    if ((array1.length) > (array2.length)) {
        for (let index = 0; index < array2.length; index++) {
            if (!(array1.find(element => element == array2[index]) == undefined)) {
                MCD = array1.find(element => element == array2[index]);
            }
        }
    }
    return MCD;
}

alert("Vamos a calcular el Maximo Comun Divisor de 2 numeros....!!! \n Presione Enter para continuar")
let uno = prompt("Ingrese el Primer numero entero mayor a 0: ");
let dos = prompt("Ingrese el Segundo numero entero mayor a 0: ");
alert("El maximo comun divisor de los numeros es: " + maximoComunDivisor(uno, dos));