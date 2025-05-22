// Solicitar al usuario qué tipo de tablas quiere ver
const opcion = prompt("¿Quieres ver las tablas de 'pares' o 'impares'?").toLowerCase();

if (opcion === "pares") {
    for (let i = 2; i <= 10; i += 2) {
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= 12; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(''); // línea en blanco para separar
    }
} else if (opcion === "impares") {
    for (let i = 1; i <= 9; i += 2) {
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= 12; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(''); // línea en blanco para separar
    }
} else {
    console.log("Opción no válida. Por favor, escribe 'pares' o 'impares'.");
}