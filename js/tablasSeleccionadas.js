const opcion = prompt("¿QUIERES VER LA TABLA DE :  'pares' o 'impares'?").toLowerCase();

if (opcion === "pares") {
    for (let i = 2; i <= 10; i += 2) {
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= 12; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(''); 
    }
} else if (opcion === "impares") {
    for (let i = 1; i <= 9; i += 2) {
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= 12; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(''); 
    }
} else {
    console.log("OPCION NO VALIDA. POR FAVOR, ESCRIBE 'pares' o 'impares'.");
}