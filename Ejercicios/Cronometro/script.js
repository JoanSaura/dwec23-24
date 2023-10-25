// Inicializamos las variables
let intervalo;
let inicio = document.getElementById("start");
let stop = document.getElementById("stop");
let restart = document.getElementById("restart");
let tiempo = document.getElementById("tiempo");

// Contadores para horas, minutos y segundos
let horas = 0;
let minutos = 0;
let segundos = 0;

// Función para mostrar el tiempo actual
function cronometro() {
    tiempo.innerHTML = `${horas} : ${minutos} : ${segundos}`;
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }
}

// Función para iniciar el cronómetro
function contar() {
    if (!intervalo) {
        intervalo = setInterval(cronometro, 1000); // Actualizar cada segundo
    }
}

// Función para detener el cronómetro
function parar() {
    clearInterval(intervalo);
    intervalo = null;
}

// Función para restablecer el cronómetro
function restablecer() {
    clearInterval(intervalo);
    intervalo = null;
    horas = 0;
    minutos = 0;
    segundos = 0;
    cronometro(); // Actualiza el tiempo en el elemento HTML
}

// Asociamos las funciones a los botones
inicio.addEventListener("click", contar);
stop.addEventListener("click", parar);
restart.addEventListener("click", restablecer);
