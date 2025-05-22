// Solicitar al usuario el número para la tabla
const numero = prompt("Ingresa un número para mostrar su tabla de multiplicar:");
const num = parseInt(numero, 10);

if (isNaN(num)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    for (let i = 1; i <= 12; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}