const edad = prompt("Por favor, ingresa tu edad:");


const edadNum = parseInt(edad, 10);


if (isNaN(edadNum) || edadNum < 0) {
    console.log("EDAD NO VALIDA");
} else if (edadNum >= 0 && edadNum <= 12) {
    console.log("NIÑO");
} else if (edadNum >= 13 && edadNum <= 17) {
    console.log("ADOLECENTE");
} else if (edadNum >= 18 && edadNum <= 59) {
    console.log("ADULTO");
} else if (edadNum >= 60) {
    console.log("ADULTO MAYOR");
}