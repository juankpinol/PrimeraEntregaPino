// info que se solicita a prospectos
var nombres = [];
var edades = [];
var sueldos = [];

// Recopilación info de 3 prospectos
for (var i = 1; i <= 3; i++) {
    var nombre = prompt("Ingresa el nombre del prospecto " + i + ":");
    var edad = parseInt(prompt("Ingresa la edad de " + nombre + ":"));
    var sueldo = parseFloat(prompt("Ingresa el sueldo de " + nombre + ":"));

    nombres.push(nombre);
    edades.push(edad);
    sueldos.push(sueldo);
}

// funnel de ventas
console.log("Funnel de Ventas:");

for (var i = 0; i < 3; i++) {
    if (edades[i] >= 18 && sueldos[i] >= 20000) {
        console.log(nombres[i] + " es un buen prospecto de venta.");
    } else {
        console.log(nombres[i] + " no es un buen prospecto de venta.");
    }
}
