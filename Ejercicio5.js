/*   5. Escribe un programa de JavaScript para identificar si el primer carácter de un string es
        mayúscula o no utilizando expresiones regulares
        TIP: Investiga el uso de expresiones regulares*/


function iniciaConMayuscula(palabra) {
    if (palabra.charAt(0) === palabra.charAt(0).toUpperCase()) {
        alert("La palabra ingresada Si empieza con Mayuscula.")
    }
    else {
        alert("La palabra ingresada No empieza con Mayuscula.")
    }
}

alert("Vamos a detectar si la primer letra de una palabra es Mayuscula...!!\nEnter para continuar.");
let palabra = prompt("Ingrese una palabra: ");
iniciaConMayuscula(palabra);



