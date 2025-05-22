// Solicitar la edad al usuario
const edad = prompt("Por favor, ingresa tu edad:");

// Convertir la entrada a número
const edadNum = parseInt(edad, 10);

// Clasificación según la edad
if (isNaN(edadNum) || edadNum < 0) {
    console.log("Edad no válida");
} else if (edadNum >= 0 && edadNum <= 12) {
    console.log("Niño");
} else if (edadNum >= 13 && edadNum <= 17) {
    console.log("Adolescente");
} else if (edadNum >= 18 && edadNum <= 59) {
    console.log("Adulto");
} else if (edadNum >= 60) {
    console.log("Adulto mayor");
}