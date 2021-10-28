/*4. Escriba un programa JavaScript para obtener el volumen de un cilindro con cuatro lugares
     decimales usando clases de objetos
     Volumen de un cilindro: V = πr 2 h
     donde r es el radio y h es la altura del cilindro.*/

let pi = 3.141592;
let cilindro = {
    altura:"",
    radio:"",
    volumen:"" }

function volumenCilindro(cilindro) {
    cilindro.altura = prompt("Ingrese la Altura del cilindro: ");
    cilindro.radio = prompt("Ingrese el Radio del Cilindro: ");
    cilindro.volumen = (pi * cilindro.altura * (cilindro.radio * cilindro.radio));
    return cilindro;
}

alert("Vamos a calcular el volumen de un Cilindro...!!! \nEnter para continuar.");
alert("El volumen del cilindro ingresado es: " + (volumenCilindro(cilindro)).volumen.toFixed(4));
console.table(cilindro);

