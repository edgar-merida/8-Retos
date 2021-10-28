/*
8. Escriba un programa JavaScript para construir el siguiente patrón, utilizando un bucle for
anidado
*
* *
* * *
* * * *
* * * * *           
                                                                       */
                                                                      
let patron = ["*"];

function dibujarPatron(repeticiones) {
    for (let index = 1; index <= repeticiones; index++){
        document.writeln(patron.join(" "));
        document.write("</br>");   
        patron.push("*");           
    }
}

let rep = prompt("Dibujaremos un patron. Ingresa el numero de repeticiones para el patron: ");
dibujarPatron(rep);