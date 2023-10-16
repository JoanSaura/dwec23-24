// Declaramos las variables
let tablas = new Array(9);

// Inicializamos la matriz
for (let i = 0; i < tablas.length; i++) {
    tablas[i] = new Array(10);
}

// Llenamos la matriz con las tablas de multiplicar
for (let fila = 0; fila < tablas.length; fila++) { 
    for (let col = 0; col < tablas[fila].length; col++) {
        tablas[fila][col] = (col + 1) * (fila + 1);
    }
}

// Imprimimos las tablas línea por línea (solo los números impares)
for (let fila = 0; fila < tablas.length; fila++) {
    let linea = "";
    for (let col = 0; col < tablas[fila].length; col++) {
        if (tablas[fila][col] % 2 !== 0) {
            linea += tablas[fila][col] + "\t"; // Usamos "\t" para separar los números con tabulaciones
        }
    }
    console.log(linea);
}
