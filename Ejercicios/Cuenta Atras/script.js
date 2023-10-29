// Declaramos las variables
let intervalo;
let minutos;
let segundos;
let tiempo = document.getElementById("time");

// Función para calcular y mostrar el tiempo
function CountDown() {
    minutos = 0;
    segundos = 10;
    tiempo.innerHTML = `${minutos} : ${segundos}`;
    
    intervalo = setInterval(function() {
        if (segundos > 0) {
            segundos--;
        } else {
            if (minutos > 0) {
                minutos--;
                segundos = 59;
            } else {
                clearInterval(intervalo);
                alert("Tiempo acabado");
            }
        }

        tiempo.innerHTML = `${minutos} : ${segundos}`;
    }, 1000);
}

// Función para parar el tiempo
function stopTime() {
    clearInterval(intervalo);
}

// Asociamos las funciones a los botones
document.getElementById("cuenta").addEventListener("click", CountDown);
document.getElementById("para").addEventListener("click", stopTime);
