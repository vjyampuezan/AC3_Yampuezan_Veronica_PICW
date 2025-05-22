
const numero = prompt("INGRESA EL NUMERO PARA VISUALIZAR LA TABLA DE MULTIPLICAR:");
const num = parseInt(numero, 10);

if (isNaN(num)) {
    console.log("POR FAVOR, INGRESAR NUMERO VALIDO.");
} else {
    for (let i = 1; i <= 12; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}