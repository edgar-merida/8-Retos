var circulo={
    pi:3.1416,
    h: 0,
    r:0
}

var altura = parseFloat(prompt("Ingrese la altura del cilindro;"))
circulo.h=altura;
var radio = parseFloat(prompt("Ingrese el radio del cilindro;"))
circulo.r=radio;

function volumen (ob){
    var vol=ob.pi*ob.r*ob.r*ob.h;
    return alert("El volumen del cilindro es:"+ vol.toFixed(4))
}

volumen(circulo);