// Declarar variables para representar las temperaturas en grados Celsius
const any2010Juny = 25.8;
const any2010Juliol = 28.6;
const any2010Agost = 30.1;

const any2015Juny = 26.5;
const any2015Juliol = 29.3;
const any2015Agost = 30.8;

const any2020Juny = 27.2;
const any2020Juliol = 29.9;
const any2020Agost = 31.5;

// Calcular la temperatura media para cada año
const mitjanaAny2010 = (any2010Juny + any2010Juliol + any2010Agost) / 3;
const mitjanaAny2015 = (any2015Juny + any2015Juliol + any2015Agost) / 3;
const mitjanaAny2020 = (any2020Juny + any2020Juliol + any2020Agost) / 3;

// Utilizar operador ternario para determinar si se superaron los 30 grados Celsius
const superatAny2010 = mitjanaAny2010 > 30 ? true : false;
const superatAny2015 = mitjanaAny2015 > 30 ? true : false;
const superatAny2020 = mitjanaAny2020 > 30 ? true : false;

// Función para convertir de Celsius a Fahrenheit y Kelvin
function convertirTemperatura(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;
  return { fahrenheit, kelvin };
}

// Convertir temperaturas medias a Fahrenheit y Kelvin
const { fahrenheit: mitjanaAny2010Fahrenheit, kelvin: mitjanaAny2010Kelvin } = convertirTemperatura(mitjanaAny2010);
const { fahrenheit: mitjanaAny2015Fahrenheit, kelvin: mitjanaAny2015Kelvin } = convertirTemperatura(mitjanaAny2015);
const { fahrenheit: mitjanaAny2020Fahrenheit, kelvin: mitjanaAny2020Kelvin } = convertirTemperatura(mitjanaAny2020);

// Mostrar los resultados por consola
console.log("Resultats per a l'any 2010:");
console.log(`- Mitjana en Celsius: ${mitjanaAny2010} °C`);
console.log(`- Mitjana en Fahrenheit: ${mitjanaAny2010Fahrenheit} °F`);
console.log(`- Mitjana en Kelvin: ${mitjanaAny2010Kelvin} K`);
console.log(`- S'ha superat els 30 graus Celsius: ${superatAny2010 ? 'Sí' : 'No'}`);

console.log("Resultats per a l'any 2015:");
console.log(`- Mitjana en Celsius: ${mitjanaAny2015} °C`);
console.log(`- Mitjana en Fahrenheit: ${mitjanaAny2015Fahrenheit} °F`);
console.log(`- Mitjana en Kelvin: ${mitjanaAny2015Kelvin} K`);
console.log(`- S'ha superat els 30 graus Celsius: ${superatAny2015 ? 'Sí' : 'No'}`);

console.log("Resultats per a l'any 2020:");
console.log(`- Mitjana en Celsius: ${mitjanaAny2020} °C`);
console.log(`- Mitjana en Fahrenheit: ${mitjanaAny2020Fahrenheit} °F`);
console.log(`- Mitjana en Kelvin: ${mitjanaAny2020Kelvin} K`);
console.log(`- S'ha superat els 30 graus Celsius: ${superatAny2020 ? 'Sí' : 'No'}`);


