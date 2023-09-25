// Declarar una variable para controlar el ciclo
var continuar = true;

while (continuar) {
    // Solicitar al usuario ingresar su edad
    var edad = parseInt(prompt("Ingresa tu edad:"));

    // Verificar la condición
    if (edad >= 18) {
        console.log("Eres mayor de edad. Puedes votar.");
    } else {
        console.log("Eres menor de edad. No puedes votar.");
    }

    // Preguntar al usuario si desea continuar
    var respuesta = prompt("¿Quieres verificar otra edad? (S/N)").toUpperCase();
    if (respuesta !== "S") {
        continuar = false;
    }
}

console.log("Fin del programa.");
