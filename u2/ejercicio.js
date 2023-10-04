// Inicializamos variables
let esCapital;
let nombreDeCiutadans;
let impostPerCiutada;

// Asignamos valores a las variables (ajustar según el caso)
esCapital = true;
nombreDeCiutadans = 150000;
impostPerCiutada = 6000;

// Definimos la expresión booleana para determinar si es una Metrópolis
const esMetropolis = (esCapital && nombreDeCiutadans > 100000) || (!esCapital && nombreDeCiutadans > 200000 && (impostPerCiutada * 12 * nombreDeCiutadans) >= 720000000);

// Verificamos si es una metrópolis y mostramos el resultado
if (esMetropolis) {
    console.log("Es una metrópolis");
} else {
    console.log("No cumple los parámetros para ser una metrópolis");
}

