// Definición de arrays con información de los planetas
const nombres = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter"];
const distanciasAlSol = [57.9, 108.2, 149.6, 227.9, 778.3];
const tamanosRelativos = [0.055, 0.815, 1, 0.107, 11.2];
const fechasDescubrimiento = ["14/05/1610", "28/12/1610", "No se aplica", "No se aplica", "No se aplica"];

// Función para crear objetos Planeta
function Planeta(nombre, distanciaAlSol, tamañoRelativo, fechaDescubrimiento) {
    this.nombre = nombre;
    this.distanciaAlSol = distanciaAlSol;
    this.tamañoRelativo = tamañoRelativo;
    this.fechaDescubrimiento = new Date(fechaDescubrimiento);
    this.mostrarInfo = function() {
        console.log(`Planeta: ${this.nombre}`);
        console.log(`Distancia al Sol: ${this.distanciaAlSol} millones de kilómetros`);
        console.log(`Tamaño relativo a la Tierra: ${this.tamañoRelativo} veces el tamaño de la Tierra`);
        console.log(`Fecha de descubrimiento: ${this.fechaDescubrimiento.toDateString()}`);
        console.log("------------------------------");
    };
}

// Crear objetos Planeta a partir de los arrays
const planetas = [];
for (let i = 0; i < nombres.length; i++) {
    const planeta = new Planeta(nombres[i], distanciasAlSol[i], tamanosRelativos[i], fechasDescubrimiento[i]);
    planetas.push(planeta);
}

// Función para mostrar la información de un planeta
function mostrarInfoPlaneta(planeta) {
    planeta.mostrarInfo();
}

// Mostrar la información de todos los planetas
console.log("Información de todos los planetas:");
planetas.forEach(mostrarInfoPlaneta);

// Utilizar un método de arrays para ordenar los planetas por distancia al Sol
const planetasOrdenados = planetas.slice().sort((a, b) => a.distanciaAlSol - b.distanciaAlSol);

// Mostrar la información de los planetas ordenados
console.log("Información de los planetas ordenados por distancia al Sol:");
planetasOrdenados.forEach(mostrarInfoPlaneta);
