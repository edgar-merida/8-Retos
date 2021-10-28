	
var hoy = new Date();
var dia=new Array(7);
dia[0]="Domingo";
dia[1]="Lunes";
dia[2]="Martes";
dia[3]="Miercoles";
dia[4]="Jueves";
dia[5]="Viernes";
dia[6]="Sabado";
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
console.log("Hoy es:" + dia[hoy.getDay()])
console.log("La hora actual es: "+ hora)