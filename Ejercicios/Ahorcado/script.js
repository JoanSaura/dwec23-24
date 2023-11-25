//Capturamos elementos del HTML
let intentos = document.getElementById("intentos");

//Definimos el maximo numero de intentos
let maxIntentos = 7;
intentos.textContent = maxIntentos;
//Declaramos las tematiacas
const tematicas = {
    animales: [
        'león',
        'elefante',
        'jirafa',
        'tigre',
        'perro',
        'gato',
        'pájaro'
    ],
    coches: [
        'tesla',
        'ford',
        'honda',
        'bmw',
        'audi',
        'toyota',
        'chevrolet'
    ],
    marcasropa: [
        'nike',
        'adidas',
        'gucci',
        'zara',
        'puma',
        'h&m',
        'calvin klein'
    ],
    paises: [
        'españa',
        'francia',
        'alemania',
        'italia',
        'estados unidos',
        'china',
        'brasil'
    ],
    marcasdemotos :[
        'harley',
        'honda',
        'yamaha',
        'kawasaki',
        'suzuki',
        'Ducati',
        'BMW',
    ]
};
//Para elegir tematicas
function elegirTematica(tematica) {
    const palabras = tematicas[tematica];
    //Coje una palabra/nombre que tiene la tematica y 
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];

    // Ocultar el pop-up
    document.getElementById('selector').style.display = 'none';

    // Mostrar la palabra con guiones bajos
    mostrarPalabraConGuiones();
}
//Mostar palabaras en guiones
function mostrarPalabraConGuiones() {
    const palabraguiones = " - ".repeat(palabraSeleccionada.length);
    document.getElementById('palabra').textContent = palabraguiones;
}
