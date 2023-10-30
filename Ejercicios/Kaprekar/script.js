// Función para ordenar los dígitos de forma ascendente en un número
function ordenarDigitosAscendente(numero) {
    const digitos = numero.toString().split('');
    digitos.sort((a, b) => a - b);
    return parseInt(digitos.join(''));
}

// Función para ordenar los dígitos de forma descendente en un número
function ordenarDigitosDescendente(numero) {
    const digitos = numero.toString().split('');
    digitos.sort((a, b) => b - a);
    return parseInt(digitos.join(''));
}

// Función para calcular el número de Kaprekar
function calcularNumeroKaprekar(numero) {
    // Verificar que el número tenga 4 dígitos
    if (numero < 1000 || numero > 9999) {
        return "El número debe tener exactamente 4 dígitos.";
    }

    // Realizar el proceso de Kaprekar
    let conteo = 0;
    while (numero !== 6174) {
        const ascendente = ordenarDigitosAscendente(numero);
        const descendente = ordenarDigitosDescendente(numero);
        const resta = descendente - ascendente;

        console.log(`${descendente} - ${ascendente} = ${resta}`);

        numero = resta;
        conteo++;
    }

    return `El número de Kaprekar es 6174 y se obtiene en ${conteo} pasos.`;
}

// Solicitar al usuario un número
const numero = prompt("Ingrese un número de 4 dígitos: ");
const numeroKaprekar = calcularNumeroKaprekar(parseInt(numero));

console.log(numeroKaprekar);
